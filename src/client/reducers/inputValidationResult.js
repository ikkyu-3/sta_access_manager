// @flow
import type { Action } from "@types";

function inputValidationResult(
  state: boolean = false,
  action: Action
): boolean {
  switch (action.type) {
    case "SHOW_INPUT_VALIDATION_RESULT":
      return true;
    case "HIDE_INPUT_VALIDATION_RESULT":
      return false;
    default:
      return state;
  }
}
export default inputValidationResult;
