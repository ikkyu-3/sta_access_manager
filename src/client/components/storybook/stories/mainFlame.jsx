import React from "react";
import { storiesOf } from "@storybook/react";
import MainFlame from "@components/MainFlame";
import DummyContainer from "../DummyContainer";
import styles from "./style.css";

// ダミーコンテンツ
function DummyContent() {
  return <div className={styles.contentArea}>コンテンツ領域</div>;
}

// #region MainFlame
storiesOf("MainFlame", module)
  .add("デフォルト", () => (
    <DummyContainer>
      <MainFlame type="default">
        <DummyContent />
      </MainFlame>
    </DummyContainer>
  ))
  .add("仕事", () => (
    <DummyContainer>
      <MainFlame type="work">
        <DummyContent />
      </MainFlame>
    </DummyContainer>
  ))
  .add("自習", () => (
    <DummyContainer>
      <MainFlame type="study">
        <DummyContent />
      </MainFlame>
    </DummyContainer>
  ))
  .add("勉強会", () => (
    <DummyContainer>
      <MainFlame type="meetUp">
        <DummyContent />
      </MainFlame>
    </DummyContainer>
  ))
  .add("サークル", () => (
    <DummyContainer>
      <MainFlame type="circle">
        <DummyContent />
      </MainFlame>
    </DummyContainer>
  ))
  .add("退出", () => (
    <DummyContainer>
      <MainFlame type="exit">
        <DummyContent />
      </MainFlame>
    </DummyContainer>
  ))
  .add("エラー", () => (
    <DummyContainer>
      <MainFlame type="error">
        <DummyContent />
      </MainFlame>
    </DummyContainer>
  ));
