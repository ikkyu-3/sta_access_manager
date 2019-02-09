// @flow
import type { Action, User } from "@types";

function participant(state: Array<User> = [], action: Action): Array<User> {
  switch (action.type) {
    case "SET_PARTICIPANT":
      return action.participant;
    case "REMOVE_PARTICIPANT":
      return [];
    default:
      return state;
  }
}
export default participant;
