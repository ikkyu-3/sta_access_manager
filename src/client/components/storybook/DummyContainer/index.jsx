import React from "react";
import styles from "./style.css";

// ダミーコンテナ
function DummyContainer(props) {
  const { children } = props;
  return <div className={styles.container}>{children}</div>;
}
export default DummyContainer;
