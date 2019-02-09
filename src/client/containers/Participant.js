// @flow
import type { State, Dispatch } from "@types";

import { connect } from "react-redux";
import { push } from "react-router-redux";

import {
  selectParticipant,
  requestStart,
  requestEnd,
  removeId,
  clearFirstName,
  clearLastName,
  clearMailAddress,
  hideInputValidationResult,
  setParticipantAction,
  removeParticipant
} from "@actions";
import Participant from "@components/Participant";
import {
  API_GET_USERS,
  ERROR_BAD_REQUEST_PATH,
  ERROR_INTERNAL_SERVER_ERROR_PAHT
} from "@constants";
import request from "@modules/request";
import createApiUrl from "@modules/createApiUrl";

const mapStateToProps = (state: State) => ({
  participant: state.participant
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  refresh: () => {
    dispatch(removeId());
    dispatch(clearFirstName());
    dispatch(clearLastName());
    dispatch(clearMailAddress());
    dispatch(hideInputValidationResult());
  },
  selectedMenu: () => {
    dispatch(selectParticipant());
  },
  getParticipant: async () => {
    const { method, path } = API_GET_USERS;
    const url: string = createApiUrl(path);
    try {
      dispatch(push(requestStart()));
      const res = await request({ url, method });
      dispatch(push(requestEnd()));
      // TODO: スキーマチェック
      if (res.data) {
        dispatch(setParticipantAction(res.data));
      } else {
        dispatch(removeParticipant());
        dispatch(push(ERROR_BAD_REQUEST_PATH));
      }
    } catch (e) {
      dispatch(push(requestEnd()));
      dispatch(removeParticipant());
      if (e.statusCode === 500) {
        dispatch(push(ERROR_INTERNAL_SERVER_ERROR_PAHT));
      } else {
        dispatch(push(ERROR_BAD_REQUEST_PATH));
      }
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Participant);
