// @flow
import type { BASE_API, PATH_PARAMETER_API, Path } from "@types";

// API
export const API_POST_REGISTER: BASE_API = {
  method: "post",
  path: "/register"
};
export const API_POST_ENTRY: BASE_API = {
  method: "post",
  path: "/entry"
};
export const API_POST_EXIT: BASE_API = {
  method: "post",
  path: "/exit"
};
export const API_GET_USER_STATE: PATH_PARAMETER_API = {
  method: "get",
  path: "/user/:id/status",
  substr: ":id"
};
export const API_GET_USERS: BASE_API = {
  method: "get",
  path: "/users"
};

// Path
export const TOP_PATH: Path = "/";
export const PURPOSE_PATH: Path = "/purpose";
export const REGISTER_PATH: Path = "/register";
export const REGISTER_SCAN_PATH: Path = "/register/scan";
export const REGISTER_REGISTRATION_IN_PATH: Path = "/register/registration-in";
export const REGISTER_SUCCESS_PATH: Path = "/register/success";
export const REGISTER_FAILURE_PATH: Path = "/register/failure";
export const PARTICIPANT_PATH: Path = "/participant";
export const COMPLETION_PATH: Path = "/completion";
export const COMPLETION_ENTRANCE_PATH: Path = "/completion/entrance";
export const COMPLETION_EXIT_PATH: Path = "/completion/exit";
export const ERROR_PATH: Path = "/error";
export const ERROR_BAD_REQUEST_PATH: Path = "/error/bad-request";
export const ERROR_NOT_FOUND_PATH: Path = "/error/not-found";
export const ERROR_INTERNAL_SERVER_ERROR_PAHT: Path =
  "/error/internal-server-error";

// Selected Menu
export const TOP: string = "top";
export const REGISTER: string = "register";
export const PARTICIPANT: string = "participant";

// Purpose
export const MEET_UP: string = "MEET_UP";
export const STUDY: string = "STUDY";
export const WORK: string = "WORK";
export const CIRCLE: string = "CIRCLE";
export const UNKNOWN: string = "UNKNOWN";

// Register Step
export const INPUT: string = "input";
export const SCAN: string = "scan";
export const COMPLETION: string = "completion";
