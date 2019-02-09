// @flow
import type { State, Dispatch } from "@types";

import { connect } from "react-redux";
import { push } from "react-router-redux";

import InputForm from "@components/Register/InputForm";
import {
  changeFirstName,
  changeLastName,
  changeMailAddress,
  changeRegisterStep,
  clearRegisterStep,
  selectRegister,
  showInputValidationResult,
  hideInputValidationResult
} from "@actions";
import { REGISTER_SCAN_PATH, INPUT } from "@constants";
import {
  getFirstNameError,
  getLastNameError,
  getMailAddressError,
  validateInput
} from "@selectors";

const mapStateToProps = (state: State) => ({
  firstNameValue: state.firstName,
  firstNameError: getFirstNameError(state),
  lastNameValue: state.lastName,
  lastNameError: getLastNameError(state),
  mailAddressValue: state.mailAddress,
  mailAddressError: getMailAddressError(state),
  validateInput: validateInput(state),
  canShow: state.inputValidationResult
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatch,
  selectedMenu: () => {
    dispatch(selectRegister());
  },
  onChangeStep: () => {
    dispatch(changeRegisterStep(INPUT));
  },
  unmount: () => {
    dispatch(clearRegisterStep());
    dispatch(hideInputValidationResult());
  },
  onChangeFirstName: (e: SyntheticInputEvent<HTMLInputElement>) => {
    dispatch(changeFirstName(e.target.value));
  },
  onChangeLastName: (e: SyntheticInputEvent<HTMLInputElement>) => {
    dispatch(changeLastName(e.target.value));
  },
  onChangeMailAddress: (e: SyntheticInputEvent<HTMLInputElement>) => {
    dispatch(changeMailAddress(e.target.value));
  },
  onClickNextButton: () => {
    dispatch(showInputValidationResult());
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onSubmitForm: (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (stateProps.validateInput) {
      dispatchProps.dispatch(push(REGISTER_SCAN_PATH));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  InputForm
);
