// @flow
import type { Action } from "@types";

function cardId(state: string = "", action: Action): string {
  switch (action.type) {
    case "ADD_CARD_ID":
      return action.cardId;
    case "REMOVE_CARD_ID":
      return "";
    default:
      return state;
  }
}
export default cardId;
