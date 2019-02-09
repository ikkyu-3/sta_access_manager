// @flow
import type { Dispatch } from "@types";

import { connect } from "react-redux";
import { push } from "react-router-redux";

import { selectTop, changeRegisterStep } from "@actions";
import Success from "@components/Register/Success";
import { TOP_PATH, PURPOSE_PATH, COMPLETION } from "@constants";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChangeStep: () => {
    dispatch(changeRegisterStep(COMPLETION));
  },
  autoPageTransition: () => {
    dispatch(push(TOP_PATH));
    dispatch(selectTop());
  },
  onEntryButton: () => {
    dispatch(push(PURPOSE_PATH));
    dispatch(selectTop());
  }
});

export default connect(null, mapDispatchToProps)(Success);
