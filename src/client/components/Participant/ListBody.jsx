// @flow
import type { ParticipantListBodyProps, User } from "@types";

import * as React from "react";
import Purpose from "./Purpose";
import Status from "./Status";
import styles from "./style.css";

function ListBody(props: ParticipantListBodyProps): React.Node {
  const { body, columnName, border, buttom } = styles;
  const { listData } = props;

  const { length } = listData;
  const listItems = listData.map((data: User, index: number): React.Node => {
    const { id, user } = data;
    const { name, purpose, isEntry } = user;
    const listButtom: string = index === length - 1 && index > 5 ? "" : buttom;
    const key = `list-${id}`;

    return (
      <li key={key} className={listButtom}>
        <div className={`${columnName} ${border}`}>{name}</div>
        <Purpose purpose={purpose} />
        <Status isEntry={isEntry} />
      </li>
    );
  });

  return (
    <div className={body}>
      <ul>{listItems}</ul>
    </div>
  );
}
export default ListBody;
