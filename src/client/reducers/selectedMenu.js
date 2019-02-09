// @flow
import type { Action } from "@types";

import { TOP, REGISTER, PARTICIPANT } from "@constants";

function selectedMenu(state: string = TOP, action: Action): string {
  switch (action.type) {
    case "SELECT_TOP":
      return TOP;
    case "SELECT_REGISTER":
      return REGISTER;
    case "SELECT_PARTICIPANT":
      return PARTICIPANT;
    default:
      return state;
  }
}
export default selectedMenu;
