// @flow
import type { Action } from "@types";

function userId(state: string = "", action: Action): string {
  switch (action.type) {
    case "CHANGE_USER_ID":
      return action.userId;
    case "CLEAR_USER_ID":
      return "";
    default:
      return state;
  }
}
export default userId;
