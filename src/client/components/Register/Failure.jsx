// @flow
import type { RegisterFailureProps } from "@types";

import * as React from "react";
import SingleButton from "@components/SingleButton";
import styles from "./style.css";

class Failure extends React.Component<RegisterFailureProps> {
  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.props.autoPageTransition();
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  timeoutId: TimeoutID;

  render() {
    const { onBackButton } = this.props;
    const { main, textOnly, contentWithButton } = styles;
    return (
      <div className={main}>
        <div className={`${contentWithButton} ${textOnly}`}>
          登録に失敗しました
        </div>
        <SingleButton
          text="Topに戻る"
          className="default"
          onButtonClick={onBackButton}
        />
      </div>
    );
  }
}
export default Failure;
