// @flow
/* eslint-disable flowtype/type-id-match */
/* eslint-disable flowtype/space-after-type-colon */
import * as React from "react";
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from "redux";

// Api
export type BASE_API = {|
  +method: "get" | "put",
  +path: string
|};

export type PATH_PARAMETER_API = {|
  +method: "get" | "put",
  +path: string,
  +substr: string
|};

export type API = BASE_API | PATH_PARAMETER_API;

// Create Api Url
export type CreateApiUrlOptions = {|
  +substr: string,
  +newstr: string
|};

// Path
export type Path = string;

// Purpose
export type Purpose = "MEET_UP" | "WORK" | "STUDY" | "CIRCLE";

// User
export type User = {|
  +id: string,
  +name: string,
  +purpose: Purpose,
  +isEntry: boolean,
  +entryTime: string,
  exitTime: string
|};

// Request body
export type RegisterData = {|
  +cardId: string,
  +name: string,
  +userId: string
|};

export type EntryData = {|
  +purpose: string
|};

export type RequestBody = RegisterData | EntryData;

export type RequestOptions = {|
  +url: string,
  +method: "get" | "put",
  +data?: RequestBody
|};

// Response
// TODO: anyをやめる
export type Response = {
  +status: number,
  +data?: any
};

/**
 * Component
 */
// Common
export type CommonProps = {
  +type: string,
  +text: string,
  +subText: string,
  +buttonText: string,
  +buttonClass: string,
  +onButtonClick: (e: SyntheticEvent<HTMLButtonElement>) => {},
  +autoPageTransition: () => {}
};

// MainFlame
export type MainFlameProps = {
  +children: React.Node
};

// Menu
export type MenuButton = {|
  +name: string,
  +path: string,
  +text: string
|};

export type MenuProps = {
  +selectedMenu: string,
  +onButtonClick: (path: Path) => void
};

// Participant
export type ParticipantProps = {
  +participant: Array<User>,
  +refresh: () => {},
  +selectedMenu: () => {},
  +getParticipant: () => {}
};

export type ParticipantListBodyProps = {
  +listData: Array<User>
};

export type ParticipantPurposeProps = {
  +purpose: Purpose
};

export type ParticipantStatusProps = {
  +isEntry: boolean
};

// Purpose
export type PurposeProps = {
  +checkId: () => {},
  +removeId: () => {},
  +onPurposeButtonClick: (e: SyntheticEvent<HTMLButtonElement>) => Promise<void>
};

// Register
export type RegisterFailureProps = {
  +autoPageTransition: () => {},
  +unmount: () => {},
  +onBackButton: () => {}
};

export type RegisterHeaderClassName = {
  +input?: string,
  +scan?: string,
  +completion?: string
};

export type RegisterHeaderProps = {
  +registerStep: string
};

export type RegisterInputProps = {
  +id: string,
  +label: string,
  +error: string,
  +value: string,
  +canShow: boolean,
  +onChange: (e: SyntheticInputEvent<HTMLInputElement>) => {}
};

export type RegisterInputFormProps = {
  +canShow: boolean,
  +firstNameValue: string,
  +firstNameError: string,
  +lastNameValue: string,
  +lastNameError: string,
  +userIdValue: string,
  +userIdError: string,
  +selectedMenu: () => {},
  +onChangeStep: () => {},
  +unmount: () => {},
  +onChangeFirstName: (e: SyntheticInputEvent<HTMLInputElement>) => {},
  +onChangeLastName: (e: SyntheticInputEvent<HTMLInputElement>) => {},
  +onChangeMailAddress: (e: SyntheticInputEvent<HTMLInputElement>) => {},
  +onClickNextButton: () => {},
  +onSubmitForm: (e: SyntheticEvent<HTMLFormElement>) => {}
};

export type RegisterScanProps = {
  +onChangeStep: () => {},
  +unmount: () => {},
  +onCancelButton: () => {}
};

export type RegisterSuccessProps = {
  +onChangeStep: () => {},
  +autoPageTransition: () => {},
  +onEntryButton: () => {}
};

// SingleButton
export type SingleButtonProps = {
  +text: string,
  +className?: string | void,
  +onButtonClick: (e: SyntheticEvent<HTMLButtonElement>) => {}
};

// Top
export type TopProps = {
  +refresh: () => {},
  +selectedMenu: () => {}
};

/**
 * Redux
 */
// State
export type State = {
  +firstName: string,
  +cardId: string,
  +inputValidationResult: boolean,
  +isConnected: boolean,
  +lastName: string,
  +userId: string,
  +participant: Array<User>,
  +registerStep: string,
  +selectedMenu: string
};

// Action
export type ReduxInitAction = {
  type: "@@INIT"
};

export type OnlyTypeAction = {
  type:
    | "REQUEST_START"
    | "REQUEST_END"
    | "REMOVE_CARD_ID"
    | "SELECT_TOP"
    | "SELECT_REGISTER"
    | "SELECT_PARTICIPANT"
    | "CLEAR_FIRST_NAME"
    | "CLEAR_LAST_NAME"
    | "CLEAR_USER_ID"
    | "CLEAR_REGISTER_STEP"
    | "SHOW_INPUT_VALIDATION_RESULT"
    | "HIDE_INPUT_VALIDATION_RESULT"
    | "REMOVE_PARTICIPANT"
};

export type AddCardIdAction = {
  type: "ADD_CARD_ID",
  +cardId: string
};

export type ChangeFirstNameAction = {
  type: "CHANGE_FIRST_NAME",
  +firstName: string
};

export type ChangeLastNameAction = {
  type: "CHANGE_LAST_NAME",
  +lastName: string
};

export type ChangeUserIdAction = {
  type: "CHANGE_USER_ID",
  +userId: string
};

export type ChangeRegisterStepAction = {
  type: "CHANGE_REGISTER_STEP",
  +registerStep: string
};

export type SetParticipantAction = {
  type: "SET_PARTICIPANT",
  +participant: Array<User>
};

export type Action =
  | ReduxInitAction
  | OnlyTypeAction
  | AddCardIdAction
  | ChangeFirstNameAction
  | ChangeLastNameAction
  | ChangeUserIdAction
  | ChangeRegisterStepAction
  | SetParticipantAction;

// Dispatch
export type Dispatch = ReduxDispatch<Action>;

// Store
export type Store = ReduxStore<State, Action, Dispatch>;
