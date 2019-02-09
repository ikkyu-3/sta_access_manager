// @flow
import type { Dispatch } from "@types";

import { connect } from "react-redux";
import {
  selectTop,
  removeId,
  clearFirstName,
  clearLastName,
  clearMailAddress,
  hideInputValidationResult
} from "@actions";
import Top from "@components/Top";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  refresh: () => {
    dispatch(removeId());
    dispatch(clearFirstName());
    dispatch(clearLastName());
    dispatch(clearMailAddress());
    dispatch(hideInputValidationResult());
  },
  selectedMenu: () => {
    dispatch(selectTop());
  }
});

export default connect(null, mapDispatchToProps)(Top);
