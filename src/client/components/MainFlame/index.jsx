// @flow
import type { MainFlameProps } from "@types";

import * as React from "react";
import styles from "./style.css";

function MainFlame(props: MainFlameProps): React.Node {
  const { children } = props;
  const { main, mainFlame, standard } = styles;
  return (
    <main className={`${mainFlame} ${standard}`}>
      <div className={main}>{children}</div>
    </main>
  );
}
export default MainFlame;
