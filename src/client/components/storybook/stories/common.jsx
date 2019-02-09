import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import MainFlame from "@components/MainFlame";
import Common from "@components/Common";
import DummyContainer from "../DummyContainer";

storiesOf("Common", module)
  .add("サブテキスト有", () => (
    <DummyContainer>
      <MainFlame>
        <Common
          text="メインテキスト"
          subText="サブテキスト"
          buttonText="ボタン"
          buttonClass="default"
          onButtonClick={action("click")}
        />
      </MainFlame>
    </DummyContainer>
  ))
  .add("サブテキスト無", () => (
    <DummyContainer>
      <MainFlame>
        <Common
          text="メインテキスト"
          buttonText="ボタン"
          buttonClass="default"
          onButtonClick={action("click")}
        />
      </MainFlame>
    </DummyContainer>
  ))
  .add("目的選択後", () => (
    <DummyContainer>
      <MainFlame>
        <Common
          type="date"
          text="Have a Good Time !!"
          subText="入室処理が完了しました"
          buttonText="Topへ戻る"
          buttonClass="default"
          onButtonClick={action("click")}
        />
      </MainFlame>
    </DummyContainer>
  ))
  .add("退出処理後", () => (
    <DummyContainer>
      <MainFlame>
        <Common
          type="date"
          text="お疲れ様でした"
          subText="退出処理が完了しました"
          buttonText="Topへ戻る"
          buttonClass="default"
          onButtonClick={action("click")}
        />
      </MainFlame>
    </DummyContainer>
  ))
  .add("未登録時", () => (
    <DummyContainer>
      <MainFlame>
        <Common
          text="404 Not Found"
          subText="使用するには登録が必要です"
          buttonText="登録はこちら"
          buttonClass="next"
          onButtonClick={action("click")}
        />
      </MainFlame>
    </DummyContainer>
  ))
  .add("リクエストエラー", () => (
    <DummyContainer>
      <MainFlame>
        <Common
          text="400 Bad Request"
          subText="(エラーメッセージがあれば表示する)"
          buttonText="Topへ戻る"
          buttonClass="default"
          onButtonClick={action("click")}
        />
      </MainFlame>
    </DummyContainer>
  ))
  .add("サーバエラー", () => (
    <DummyContainer>
      <MainFlame>
        <Common
          text="500 Internal Server Error"
          subText="管理者に問い合わせて下さい"
          buttonText="Topへ戻る"
          buttonClass="default"
          onButtonClick={action("click")}
        />
      </MainFlame>
    </DummyContainer>
  ));
