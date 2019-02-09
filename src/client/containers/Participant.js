// @flow
import type { State, Dispatch } from "@types";

import { connect } from "react-redux";
import { push } from "react-router-redux";

import {
  selectParticipant,
  requestStart,
  requestEnd,
  removeCardId,
  clearFirstName,
  clearLastName,
  clearUserId,
  hideInputValidationResult,
  setParticipantAction,
  removeParticipant
} from "@actions";
import Participant from "@components/Participant";
import { API_GET_USERS, ERROR_BAD_REQUEST_PATH } from "@constants";
import request from "@modules/request";
import createApiUrl from "@modules/createApiUrl";

const mapStateToProps = (state: State) => ({
  participant: state.participant
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  refresh: () => {
    dispatch(removeCardId());
    dispatch(clearFirstName());
    dispatch(clearLastName());
    dispatch(clearUserId());
    dispatch(hideInputValidationResult());
  },
  selectedMenu: () => {
    dispatch(selectParticipant());
  },
  getParticipant: async () => {
    const { method, path } = API_GET_USERS;
    const url: string = createApiUrl(path);
    dispatch(push(requestStart()));
    const res = await request({ url, method });
    dispatch(push(requestEnd()));
    // TODO: スキーマチェック
    if (Array.isArray(res.data)) {
      dispatch(setParticipantAction(res.data));
    } else {
      dispatch(removeParticipant());
      dispatch(push(ERROR_BAD_REQUEST_PATH));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Participant);
