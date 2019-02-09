// @flow
import type { State } from "@types";
import { createSelector } from "reselect";

export const getFirstNameError = createSelector(
  (state: State): string => state.firstName,
  (firstName: string): string => {
    if (firstName.length === 0) return "入力してください";
    return "";
  }
);

export const getLastNameError = createSelector(
  (state: State): string => state.lastName,
  (lastName: string): string => {
    if (lastName.length === 0) return "入力してください";
    return "";
  }
);

export const getUserIdError = createSelector(
  (state: State): string => state.userId,
  (userId: string): string => {
    if (userId.length === 0) return "入力してください";
    // TODO: もう少し頑張った入力値チェックを行う
    return "";
  }
);

export const validateInput = createSelector(
  getFirstNameError,
  getLastNameError,
  getUserIdError,
  (firstNameError, lastNameError, userIdError) =>
    firstNameError.length === 0 &&
    lastNameError.length === 0 &&
    userIdError.length === 0
);
