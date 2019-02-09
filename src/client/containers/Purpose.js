// @flow
import type { State, Dispatch } from "@types";

import { connect } from "react-redux";
import { push } from "react-router-redux";

import { requestStart, requestEnd, removeCardId } from "@actions";
import Purpose from "@components/Purpose";
import {
  API_PUT_ENTRY,
  TOP_PATH,
  COMPLETION_ENTRANCE_PATH,
  ERROR_BAD_REQUEST_PATH,
  ERROR_INTERNAL_SERVER_ERROR_PAHT,
  MEET_UP,
  STUDY,
  WORK,
  CIRCLE,
  UNKNOWN
} from "@constants";
import createApiUrl from "@modules/createApiUrl";
import request from "@modules/request";

const mapStateToProps = (state: State) => ({ state });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatch,
  removeId: () => {
    dispatch(removeCardId());
  }
});

const getPurpose = (purpose: string): string => {
  switch (purpose) {
    case "meetup":
      return MEET_UP;
    case "study":
      return STUDY;
    case "work":
      return WORK;
    case "circle":
      return CIRCLE;
    default:
      return "";
  }
};

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...dispatchProps,
  ...ownProps,
  checkCardId: () => {
    if (!/^[0-9a-f]{16}$/.test(stateProps.state.cardId)) {
      dispatchProps.dispatch(removeCardId());
      dispatchProps.dispatch(push(TOP_PATH));
    }
  },
  onPurposeButtonClick: async (
    e: SyntheticEvent<HTMLButtonElement>
  ): Promise<void> => {
    if (!(e.target instanceof window.HTMLButtonElement)) return;

    const purpose = getPurpose(e.target.id);
    if (purpose === UNKNOWN) return;

    const { cardId } = stateProps.state;

    const { dispatch } = dispatchProps;
    const { method, path, substr } = API_PUT_ENTRY;
    const url = createApiUrl(path, { substr, newstr: cardId });
    const data = { purpose };

    // 通信処理
    try {
      dispatch(requestStart());
      await request({ url, method, data });
      dispatch(requestEnd());

      dispatch(push(COMPLETION_ENTRANCE_PATH));
    } catch (error) {
      dispatch(requestEnd());

      if (error.status === 500) {
        dispatch(push(ERROR_INTERNAL_SERVER_ERROR_PAHT));
      } else {
        dispatch(push(ERROR_BAD_REQUEST_PATH));
      }
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  Purpose
);
