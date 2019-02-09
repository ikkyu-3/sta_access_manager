// @flow
import * as React from "react";
import styles from "./style.css";

function RegistrationIn(): React.Node {
  const { main, content, registrationIn } = styles;
  return (
    <div className={main}>
      <div className={`${content} ${registrationIn}`}>登録中</div>
    </div>
  );
}
export default RegistrationIn;
