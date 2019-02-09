// @flow
import type { Dispatch } from "@types";

import { connect } from "react-redux";
import { push } from "react-router-redux";

import { selectTop } from "@actions";
import Failure from "@components/Register/Failure";
import { TOP_PATH } from "@constants";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  autoPageTransition: () => {
    dispatch(push(TOP_PATH));
    dispatch(selectTop());
  },
  onBackButton: () => {
    dispatch(push(TOP_PATH));
    dispatch(selectTop());
  }
});

export default connect(null, mapDispatchToProps)(Failure);
