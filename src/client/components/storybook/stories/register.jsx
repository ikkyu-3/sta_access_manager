import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import MainFlame from "@components/MainFlame";
import Header from "@components/Register/Header";
import RegisterInput from "@components/Register/RegisterInput";
import RegisterScan from "@components/Register/RegisterScan";
import RegistrationIn from "@components/Register/RegistrationIn";
import RegisterFailed from "@components/Register/RegisterFailed";
import RegisterSuccess from "@components/Register/RegisterSuccess";
import DummyContainer from "../DummyContainer";
import styles from "./style.css";

const { container } = styles;

storiesOf("Register", module)
  .add("入力画面", () => (
    <DummyContainer>
      <MainFlame type="default">
        <div className={container}>
          <Header current="input" />
          <RegisterInput
            firstNameValue="hr"
            firstNameError=""
            lastNameValue="js"
            lastNameError=""
            emailValue="hr-js"
            emailError=""
            onFirstNameChange={action("onFirstNameChange")}
            onLastNameChange={action("onLastNameChange")}
            onEmailChange={action("onEmailChange")}
            onClickNextButton={() => {}}
            onSubmitForm={e => e.preventDefault()}
          />
        </div>
      </MainFlame>
    </DummyContainer>
  ))
  .add("入力画面(エラー時)", () => (
    <DummyContainer>
      <MainFlame type="default">
        <div className={container}>
          <Header current="input" />
          <RegisterInput
            firstNameValue="hr"
            firstNameError="Error"
            lastNameValue="js"
            lastNameError="コメントは"
            emailValue="hr-js"
            emailError="自分で設定可能です"
            onFirstNameChange={action("onFirstNameChange")}
            onLastNameChange={action("onLastNameChange")}
            onEmailChange={action("onEmailChange")}
            onClickNextButton={() => {}}
            onSubmitForm={e => e.preventDefault()}
          />
        </div>
      </MainFlame>
    </DummyContainer>
  ))
  .add("スキャン画面", () => (
    <DummyContainer>
      <MainFlame type="default">
        <div className={container}>
          <Header current="scan" />
          <RegisterScan onCancelButton={action("onCancelButton")} />
        </div>
      </MainFlame>
    </DummyContainer>
  ))
  .add("登録中画面", () => (
    <DummyContainer>
      <MainFlame type="default">
        <div className={container}>
          <Header current="scan" />
          <RegistrationIn />
        </div>
      </MainFlame>
    </DummyContainer>
  ))
  .add("登録失敗画面", () => (
    <DummyContainer>
      <MainFlame type="default">
        <div className={container}>
          <Header current="failed" />
          <RegisterFailed onBackButton={action("onBackButton")} />
        </div>
      </MainFlame>
    </DummyContainer>
  ))
  .add("登録完了画面", () => (
    <DummyContainer>
      <MainFlame type="default">
        <div className={container}>
          <Header current="completion" />
          <RegisterSuccess onEntryButton={action("onEntryButton")} />
        </div>
      </MainFlame>
    </DummyContainer>
  ));
