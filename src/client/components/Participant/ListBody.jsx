// @flow
import type { ParticipantListBodyProps, User } from "@types";

import * as React from "react";
import Purpose from "./Purpose";
import Status from "./Status";
import styles from "./style.css";

function getPurposeClassName(purpose: string) {
  const { work, study, meetUp, circle } = styles;

  switch (purpose) {
    case "WORK":
      return work;
    case "STUDY":
      return study;
    case "MEET_UP":
      return meetUp;
    case "CIRCLE":
      return circle;
    default:
      return null;
  }
}

function ListBody(props: ParticipantListBodyProps): React.Node {
  const { body, columnName, border, buttom } = styles;
  const { listData } = props;

  const { length } = listData;
  const listItems = listData.map((data: User, index: number): React.Node => {
    const { userId, name, purpose, isEntry } = data;
    const listButtom: string = index === length - 1 && index > 5 ? "" : buttom;
    const key = `list-${userId}`;

    return (
      <li key={key} className={listButtom}>
        <div className={`${columnName} ${border}`}>{name}</div>
        <Purpose purpose={getPurposeClassName(purpose)} />
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
