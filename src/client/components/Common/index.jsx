// @flow
import type { CommonProps } from "@types";

import * as React from "react";
import SingleButton from "@components/SingleButton";
import styles from "./style.css";

class Common extends React.Component<CommonProps> {
  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.props.autoPageTransition();
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  timeoutId: TimeoutID;

  render(): React.Node {
    const {
      type,
      text,
      subText,
      buttonText,
      buttonClass,
      onButtonClick
    } = this.props;
    const { textArea, main, date, sub } = styles;

    const dateTextNode =
      type === "date" ? (
        <div className={date}>{new Date().toLocaleString()}</div>
      ) : null;
    const subTextNode = subText ? <div className={sub}>{subText}</div> : null;

    return (
      <div>
        <div className={textArea}>
          <div className={main}>{text}</div>
          {dateTextNode}
          {subTextNode}
        </div>
        <SingleButton
          text={buttonText}
          className={buttonClass}
          onButtonClick={onButtonClick}
        />
      </div>
    );
  }
}
export default Common;
