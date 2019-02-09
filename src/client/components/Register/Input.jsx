// @flow
import type { RegisterInputProps } from "@types";

import * as React from "react";
import styles from "./style.css";

function Input(props: RegisterInputProps): React.Node {
  const { id, label, error, value, canShow, onChange } = props;
  const { inputArea, input, bad, message, hidden } = styles;

  const errorMessage = canShow ? message : `${message} ${hidden}`;
  const inputClass = error.length > 0 && canShow ? `${input} ${bad}` : input;

  return (
    <div className={inputArea}>
      <label htmlFor={id}>
        {label}
        <span className={errorMessage}>{error}</span>
        <input
          id={id}
          className={inputClass}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
export default Input;
