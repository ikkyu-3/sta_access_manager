// @flow
import type { $AxiosError } from "axios";
import type { Socket } from "socket.io-client";
import type { Store, Dispatch, RequestBody, CreateApiUrlOptions } from "@types";

import { push } from "react-router-redux";
import io from "socket.io-client";

import {
  requestStart,
  requestEnd,
  addCardId,
  removeCardId,
  clearFirstName,
  clearLastName,
  clearUserId
} from "@actions";
import request from "@modules/request";
import createApiUrl from "@modules/createApiUrl";
import {
  TOP_PATH,
  PURPOSE_PATH,
  REGISTER_SCAN_PATH,
  REGISTER_REGISTRATION_IN_PATH,
  REGISTER_SUCCESS_PATH,
  REGISTER_FAILURE_PATH,
  COMPLETION_EXIT_PATH,
  ERROR_NOT_FOUND_PATH,
  ERROR_BAD_REQUEST_PATH,
  ERROR_INTERNAL_SERVER_ERROR_PAHT,
  API_GET_USER,
  API_PUT_USER,
  API_PUT_EXIT
} from "@constants";

/**
 * @class
 */
class SocketProvider {
  socket: Socket;
  store: Store;

  /**
   * @constructor
   * @param {string} url 接続先のURL
   */
  constructor(url: string, store: Store) {
    this.socket = io(url);
    this.store = store;
  }

  addEventListener(): void {
    this.socket.on("disconnect", () => {
      this.socket.open();
    });
    this.socket.on("scan", this.scan.bind(this));
  }

  scan(cardId: string): void {
    if (!this.canExecuteScan(cardId)) return;

    this.store.dispatch(addCardId(cardId));

    const { pathname } = window.location;
    if (pathname === TOP_PATH) {
      this.getUserState();
    } else if (pathname === REGISTER_SCAN_PATH) {
      this.postUser();
    }
  }

  /**
   * ユーザーの状態を取得
   */
  async getUserState(): Promise<void> {
    const { cardId } = this.store.getState();
    const { method, path, substr } = API_GET_USER;
    const options: CreateApiUrlOptions = { substr, newstr: cardId };
    const url: string = createApiUrl(path, options);

    this.store.dispatch(requestStart());
    const res = await request({ url, method });
    this.store.dispatch(requestEnd());

    if (res.status === 200) {
      if (res.data.isEntry) {
        // 退出
        await this.postExit();
      } else {
        // 目的選択
        this.socket.emit("sound", "SUCCESS");
        this.store.dispatch(push(PURPOSE_PATH));
      }
    } else if (res.status === 404) {
      if (res.data.exists) {
        // 目的選択
        this.socket.emit("sound", "SUCCESS");
        this.store.dispatch(push(PURPOSE_PATH));
      } else {
        // 未登録
        this.socket.emit("sound", "ERROR");
        this.store.dispatch(push(ERROR_NOT_FOUND_PATH));
      }
    } else {
      // エラー
      this.socket.emit("sound", "ERROR");
      this.store.dispatch(removeCardId());
      this.catchError(res);
    }
  }

  /**
   * 退出リクエスト
   */
  async postExit(): Promise<void> {
    const { cardId } = this.store.getState();
    const { method, path, substr } = API_PUT_EXIT;
    const options: CreateApiUrlOptions = { substr, newstr: cardId };
    const url: string = createApiUrl(path, options);

    this.store.dispatch(requestStart());
    const res = await request({ url, method });
    this.store.dispatch(requestEnd());

    if (res.status === 200) {
      this.socket.emit("sound", "SUCCESS");
      this.store.dispatch(removeCardId());
      this.store.dispatch(push(COMPLETION_EXIT_PATH));
    } else {
      this.socket.emit("sound", "ERROR");
      this.store.dispatch(removeCardId());
      this.catchError(res);
    }
  }

  /**
   * ユーザー登録リクエスト
   */
  async postUser(): Promise<void> {
    this.store.dispatch(push(REGISTER_REGISTRATION_IN_PATH));

    const { method, path } = API_PUT_USER;
    const url: string = createApiUrl(path);
    const { cardId, firstName, lastName, userId } = this.store.getState();
    const data = {
      cardId,
      name: `${lastName} ${firstName}`,
      userId
    };

    this.store.dispatch(requestStart());
    const res = await request({ url, method, data });
    this.store.dispatch(requestEnd());

    if (res.status === 201) {
      this.socket.emit("sound", "SUCCESS");
      this.store.dispatch(push(REGISTER_SUCCESS_PATH));
    } else {
      this.socket.emit("sound", "ERROR");
      this.store.dispatch(push(REGISTER_FAILURE_PATH));
    }

    // 初期化
    this.store.dispatch(clearFirstName());
    this.store.dispatch(clearLastName());
    this.store.dispatch(clearUserId());
  }

  /**
   * スキャン処理が実行できるか判定
   * @param {any} id スキャンしたid
   */
  canExecuteScan(id: any): boolean {
    if (!/^[0-9a-f]{16}$/.test(id)) return false;

    const { isConnected } = this.store.getState();
    return !isConnected;
  }

  /**
   * エラーハンドリング
   */
  catchError(error: $AxiosError<RequestBody>): void {
    const { dispatch }: { dispatch: Dispatch } = this.store;
    switch (error.status) {
      case 500:
        dispatch(push(ERROR_INTERNAL_SERVER_ERROR_PAHT));
        break;
      default:
        dispatch(push(ERROR_BAD_REQUEST_PATH));
        break;
    }
  }
}
export default SocketProvider;
