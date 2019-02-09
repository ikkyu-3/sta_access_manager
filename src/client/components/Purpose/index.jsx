// @flow
import type { PurposeProps } from "@types";

import * as React from "react";
import styles from "./style.css";

class Purpose extends React.Component<PurposeProps> {
  componentDidMount() {
    this.props.checkId();
  }

  componentWillUnmount() {
    this.props.removeId();
  }

  render() {
    const { onPurposeButtonClick } = this.props;
    const { container, meetup, work, study, circle, message } = styles;

    return (
      <div className={container}>
        <button id="meetup" className={meetup} onClick={onPurposeButtonClick}>
          勉強会
        </button>
        <button id="work" className={work} onClick={onPurposeButtonClick}>
          仕事
        </button>
        <button id="study" className={study} onClick={onPurposeButtonClick}>
          自習
        </button>
        <button id="circle" className={circle} onClick={onPurposeButtonClick}>
          サークル
        </button>
        <div className={message}>目的を選択して下さい</div>
      </div>
    );
  }
}
export default Purpose;
