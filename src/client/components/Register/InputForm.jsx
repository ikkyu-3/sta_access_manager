// @flow
import type { RegisterInputFormProps } from "@types";

import * as React from "react";
import Input from "@components/Register/Input";
import SingleButton from "@components/SingleButton";
import styles from "./style.css";

class InputForm extends React.Component<RegisterInputFormProps> {
  componentDidMount() {
    this.props.selectedMenu();
    this.props.onChangeStep();
  }

  componentWillUnmount() {
    this.props.unmount();
  }

  render() {
    const {
      canShow,
      firstNameValue,
      firstNameError,
      onChangeFirstName,
      lastNameValue,
      lastNameError,
      onChangeLastName,
      userIdValue,
      userIdError,
      onChangeUserId,
      onClickNextButton,
      onSubmitForm
    } = this.props;
    const { main, inputName, inputUserId, contentWithButton } = styles;

    return (
      <div className={main}>
        <form onSubmit={onSubmitForm}>
          <div className={contentWithButton}>
            <div className={inputUserId}>
              <Input
                id="userId"
                label="ユーザID"
                error={userIdError}
                value={userIdValue}
                canShow={canShow}
                onChange={onChangeUserId}
              />
            </div>
            <div className={inputName}>
              <Input
                id="lastName"
                label="姓"
                error={lastNameError}
                value={lastNameValue}
                canShow={canShow}
                onChange={onChangeLastName}
              />
              <Input
                id="firstName"
                label="名"
                error={firstNameError}
                value={firstNameValue}
                canShow={canShow}
                onChange={onChangeFirstName}
              />
            </div>
          </div>
          <SingleButton
            text="次へ"
            className="next"
            onButtonClick={onClickNextButton}
          />
        </form>
      </div>
    );
  }
}
export default InputForm;
