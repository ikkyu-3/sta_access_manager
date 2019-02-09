// @flow
import type { TopProps } from "@types";

import * as React from "react";
import styles from "./style.css";

class Top extends React.Component<TopProps> {
  componentDidMount() {
    this.props.refresh();
    this.props.selectedMenu();
  }

  render() {
    const { top, label } = styles;
    return (
      <div className={top}>
        <div>カードをスキャンして下さい</div>
        <div className={label}>Created by hr-js</div>
      </div>
    );
  }
}
export default Top;
