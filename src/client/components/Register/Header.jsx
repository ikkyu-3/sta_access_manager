// @flow
import type { RegisterHeaderClassName, RegisterHeaderProps } from "@types";

import * as React from "react";
import { INPUT, SCAN, COMPLETION } from "@constants";
import styles from "./style.css";

function getClassName(registerStep: string): RegisterHeaderClassName {
  const { active, disabled } = styles;

  if (registerStep === INPUT) {
    return { input: active, scan: disabled, completion: disabled };
  }

  if (registerStep === SCAN) {
    return { scan: active, completion: disabled };
  }

  if (registerStep === COMPLETION) {
    return { completion: active };
  }

  return { input: disabled, scan: disabled, completion: disabled };
}

function Header(props: RegisterHeaderProps): React.Node {
  const { registerStep } = props;
  const { header } = styles;
  const { input, scan, completion } = getClassName(registerStep);
  return (
    <ol className={header}>
      <li className={input}>
        1. 入力<span>&gt;</span>
      </li>
      <li className={scan}>
        2. 読取<span>&gt;</span>
      </li>
      <li className={completion}>3. 完了</li>
    </ol>
  );
}
export default Header;
