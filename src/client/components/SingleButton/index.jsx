// @flow
import type { SingleButtonProps } from "@types";

import * as React from "react";
import styles from "./style.css";

function SingleButton(props: SingleButtonProps): React.Node {
  const { text = "", className = "default", onButtonClick } = props;
  const { singleButton } = styles;

  return (
    <div className={singleButton}>
      <button className={styles[className]} onClick={onButtonClick}>
        {text}
      </button>
    </div>
  );
}
export default SingleButton;
