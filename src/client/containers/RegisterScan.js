// @flow
import type { Dispatch } from "@types";

import { connect } from "react-redux";
import { push } from "react-router-redux";

import { changeRegisterStep, clearRegisterStep } from "@actions";
import Scan from "@components/Register/Scan";
import { REGISTER_PATH, SCAN } from "@constants";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChangeStep: () => {
    dispatch(changeRegisterStep(SCAN));
  },
  unmount: () => {
    dispatch(clearRegisterStep());
  },
  onCancelButton: () => {
    dispatch(push(REGISTER_PATH));
  }
});

export default connect(null, mapDispatchToProps)(Scan);
