// @flow
import * as React from "react";
import styles from "./style.css";

function ListHeader(): React.Node {
  const { header, columnName, columnPurpose, columnStatus, border } = styles;
  return (
    <div className={header}>
      <div className={`${columnName} ${border}`}>名前</div>
      <div className={`${columnPurpose} ${border}`}>目的</div>
      <div className={columnStatus}>入退室</div>
    </div>
  );
}
export default ListHeader;
