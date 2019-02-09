// @flow
import type { Action } from "@types";

function registerStep(state: string = "", action: Action): string {
  switch (action.type) {
    case "CHANGE_REGISTER_STEP":
      return action.registerStep;
    case "CLEAR_REGISTER_STEP":
      return "";
    default:
      return state;
  }
}
export default registerStep;
