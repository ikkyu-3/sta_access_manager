// @flow
import type { Action } from "@types";

function firstName(state: string = "", action: Action): string {
  switch (action.type) {
    case "CHANGE_FIRST_NAME":
      return action.firstName;
    case "CLEAR_FIRST_NAME":
      return "";
    default:
      return state;
  }
}
export default firstName;
