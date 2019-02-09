// @flow
import type { RegisterScanProps } from "@types";

import * as React from "react";
import SingleButton from "@components/SingleButton";
import styles from "./style.css";

class RegisterScan extends React.Component<RegisterScanProps> {
  componentDidMount() {
    this.props.onChangeStep();
  }

  componentWillUnmount() {
    this.props.unmount();
  }

  render() {
    const { onCancelButton } = this.props;
    const { main, textOnly, contentWithButton } = styles;
    return (
      <div className={main}>
        <div className={`${contentWithButton} ${textOnly}`}>
          カードをスキャンして下さい
        </div>
        <SingleButton
          text="戻る"
          className="default"
          onButtonClick={onCancelButton}
        />
      </div>
    );
  }
}
export default RegisterScan;
