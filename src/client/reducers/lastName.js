// @flow
import type { Action } from "@types";

function lastName(state: string = "", action: Action): string {
  switch (action.type) {
    case "CHANGE_LAST_NAME":
      return action.lastName;
    case "CLEAR_LAST_NAME":
      return "";
    default:
      return state;
  }
}
export default lastName;
