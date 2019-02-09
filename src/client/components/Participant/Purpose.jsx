// @flow
import type { ParticipantPurposeProps } from "@types";

import * as React from "react";
import { MEET_UP, STUDY, WORK, CIRCLE } from "@constants";
import styles from "./style.css";

function Purpose(props: ParticipantPurposeProps): React.Node {
  const { purpose } = props;
  const { columnPurpose, border, work, study, meetUp, circle } = styles;

  let background: string = "";
  let value: string = "";

  if (purpose === MEET_UP) {
    background = meetUp;
    value = "勉強会";
  }
  if (purpose === STUDY) {
    background = study;
    value = "自習";
  }
  if (purpose === WORK) {
    background = work;
    value = "仕事";
  }
  if (purpose === CIRCLE) {
    background = circle;
    value = "サークル";
  }

  return (
    <div className={`${columnPurpose} ${border} ${background}`}>{value}</div>
  );
}
export default Purpose;
