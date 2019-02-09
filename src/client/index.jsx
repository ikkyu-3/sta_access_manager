// @flow
import * as React from "react";
import ReactDOM from "react-dom";
import App from "@containers/App";

const root = document.getElementById("root");
if (root === null) {
  throw new Error("rootがnullです。");
}

ReactDOM.render(<App />, root, () => {
  setTimeout(() => {
    const element = document.getElementById("launch");
    if (element) element.classList.add("fade-out");
  }, 8000);
});
