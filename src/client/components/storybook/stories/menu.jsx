import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Menu from "@components/Menu";

storiesOf("Menu", module)
  .add("[ 入退室処理 ]選択時", () => (
    <Menu
      current="入退室処理"
      onButtonClick={action("引数に文字列が渡される")}
    />
  ))
  .add("[ ユーザ登録 ]選択時", () => (
    <Menu
      current="ユーザ登録"
      onButtonClick={action("引数に文字列が渡される")}
    />
  ))
  .add("[ 利用者一覧 ]選択時", () => (
    <Menu
      current="利用者一覧"
      onButtonClick={action("引数に文字列が渡される")}
    />
  ));
// linkTo('TodoItem', 'not completed')
