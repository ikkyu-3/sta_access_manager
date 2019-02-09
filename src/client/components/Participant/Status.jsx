// @flow
import type { ParticipantStatusProps } from "@types";

import * as React from "react";
import styles from "./style.css";

function Status(props: ParticipantStatusProps): React.Node {
  const { isEntry } = props;
  const { columnStatus, entry, exit } = styles;

  const className = isEntry
    ? `${columnStatus} ${entry}`
    : `${columnStatus} ${exit}`;
  const value = isEntry ? "入" : "退";

  return <div className={className}>{value}</div>;
}
export default Status;
