// @flow
import type { RegisterSuccessProps } from "@types";

import * as React from "react";
import SingleButton from "@components/SingleButton";
import styles from "./style.css";

class Success extends React.Component<RegisterSuccessProps> {
  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.props.onChangeStep();
      this.props.autoPageTransition();
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  timeoutId: TimeoutID;

  render() {
    const { onEntryButton } = this.props;
    const { main, textOnly, contentWithButton } = styles;
    return (
      <div className={main}>
        <div className={`${contentWithButton} ${textOnly}`}>登録しました!!</div>
        <SingleButton
          text="入室する"
          className="next"
          onButtonClick={onEntryButton}
        />
      </div>
    );
  }
}
export default Success;
