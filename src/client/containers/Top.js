// @flow
import type { Dispatch } from "@types";

import { connect } from "react-redux";
import {
  selectTop,
  removeCardId,
  clearFirstName,
  clearLastName,
  clearUserId,
  hideInputValidationResult
} from "@actions";
import Top from "@components/Top";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  refresh: () => {
    dispatch(removeCardId());
    dispatch(clearFirstName());
    dispatch(clearLastName());
    dispatch(clearUserId());
    dispatch(hideInputValidationResult());
  },
  selectedMenu: () => {
    dispatch(selectTop());
  }
});

export default connect(null, mapDispatchToProps)(Top);
