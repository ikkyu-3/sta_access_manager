// @flow
import type { ParticipantProps } from "@types";

import * as React from "react";
import ListHeader from "./ListHeader";
import ListBody from "./ListBody";
import styles from "./style.css";

class Participant extends React.Component<ParticipantProps> {
  componentDidMount() {
    this.props.refresh();
    this.props.selectedMenu();
    this.props.getParticipant();
  }

  render(): React.Node {
    const { flame, list } = styles;
    const { participant } = this.props;

    return (
      <div className={flame}>
        <div className={list}>
          <ListHeader />
          <ListBody listData={participant} />
        </div>
      </div>
    );
  }
}

export default Participant;
