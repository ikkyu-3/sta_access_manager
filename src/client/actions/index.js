// @flow
import type {
  User,
  OnlyTypeAction,
  AddCardIdAction,
  ChangeFirstNameAction,
  ChangeLastNameAction,
  ChangeUserIdAction,
  ChangeRegisterStepAction,
  SetParticipantAction
} from "@types";

// isConnected
export function requestStart(): OnlyTypeAction {
  return {
    type: "REQUEST_START"
  };
}

export function requestEnd(): OnlyTypeAction {
  return {
    type: "REQUEST_END"
  };
}

// cardId
export function addCardId(cardId: string): AddCardIdAction {
  return {
    type: "ADD_CARD_ID",
    cardId
  };
}

export function removeCardId(): OnlyTypeAction {
  return {
    type: "REMOVE_CARD_ID"
  };
}

/**
 * Menu
 */
export function selectTop(): OnlyTypeAction {
  return {
    type: "SELECT_TOP"
  };
}

export function selectRegister(): OnlyTypeAction {
  return {
    type: "SELECT_REGISTER"
  };
}

export function selectParticipant(): OnlyTypeAction {
  return {
    type: "SELECT_PARTICIPANT"
  };
}

/**
 * First Name
 */
export function changeFirstName(firstName: string): ChangeFirstNameAction {
  return {
    type: "CHANGE_FIRST_NAME",
    firstName
  };
}

export function clearFirstName(): OnlyTypeAction {
  return {
    type: "CLEAR_FIRST_NAME"
  };
}

/**
 * Last Name
 */
export function changeLastName(lastName: string): ChangeLastNameAction {
  return {
    type: "CHANGE_LAST_NAME",
    lastName
  };
}

export function clearLastName(): OnlyTypeAction {
  return {
    type: "CLEAR_LAST_NAME"
  };
}

/**
 * User Id
 */
export function changeUserId(userId: string): ChangeUserIdAction {
  return {
    type: "CHANGE_USER_ID",
    userId
  };
}

export function clearUserId(): OnlyTypeAction {
  return {
    type: "CLEAR_USER_ID"
  };
}

/**
 * Register Step
 */
export function changeRegisterStep(
  registerStep: string
): ChangeRegisterStepAction {
  return {
    type: "CHANGE_REGISTER_STEP",
    registerStep
  };
}

export function clearRegisterStep(): OnlyTypeAction {
  return {
    type: "CLEAR_REGISTER_STEP"
  };
}

/**
 * Input Validation Result
 */
export function showInputValidationResult(): OnlyTypeAction {
  return {
    type: "SHOW_INPUT_VALIDATION_RESULT"
  };
}

export function hideInputValidationResult(): OnlyTypeAction {
  return {
    type: "HIDE_INPUT_VALIDATION_RESULT"
  };
}

/**
 * Participant
 */
export function setParticipantAction(
  participant: Array<User>
): SetParticipantAction {
  return {
    type: "SET_PARTICIPANT",
    participant
  };
}

export function removeParticipant(): OnlyTypeAction {
  return {
    type: "REMOVE_PARTICIPANT"
  };
}
