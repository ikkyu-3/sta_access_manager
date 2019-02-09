// @flow
import type { MenuProps, MenuButton } from "@types";

import * as React from "react";
import {
  TOP,
  TOP_PATH,
  REGISTER,
  REGISTER_PATH,
  PARTICIPANT,
  PARTICIPANT_PATH
} from "@constants";

import styles from "./style.css";

const menuList: Array<MenuButton> = [
  { text: "入退室処理", name: TOP, path: TOP_PATH },
  { text: "ユーザ登録", name: REGISTER, path: REGISTER_PATH },
  { text: "利用者一覧", name: PARTICIPANT, path: PARTICIPANT_PATH }
];

function Menu(props: MenuProps): React.Node {
  const { selectedMenu, onButtonClick } = props;
  const { menu, list, button, selected } = styles;

  const listItems: Array<React.Node> = menuList.map(
    (item: MenuButton): React.Node => {
      const { name, path, text } = item;
      const className: string =
        name === selectedMenu ? `${button} ${selected}` : button;

      return (
        <li key={name}>
          <button
            className={className}
            onClick={() => {
              onButtonClick(path);
            }}
          >
            {text}
          </button>
        </li>
      );
    }
  );

  return (
    <nav className={menu}>
      <ul className={list}>{listItems}</ul>
    </nav>
  );
}
export default Menu;
