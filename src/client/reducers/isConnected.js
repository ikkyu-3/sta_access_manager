// @flow
import type { Action } from "@types";

function isConnected(state: boolean = false, action: Action): boolean {
  switch (action.type) {
    case "REQUEST_START":
      return true;
    case "REQUEST_END":
      return false;
    default:
      return state;
  }
}
export default isConnected;
