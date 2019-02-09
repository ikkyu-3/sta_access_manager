// @flow
import inputValidationResult from "@reducers/inputValidationResult";

describe("reducers/inputValidationResult.jsのtest", () => {
  it("初期状態を取得できる", () => {
    const expectedState = false;
    expect(inputValidationResult(undefined, { type: "@@INIT" })).toBe(
      expectedState
    );
  });

  it("type: SHOW_INPUT_VALIDATION_RESULTを処理する", () => {
    const expectedState = true;
    expect(
      inputValidationResult(false, { type: "SHOW_INPUT_VALIDATION_RESULT" })
    ).toBe(expectedState);
  });

  it("type: HIDE_INPUT_VALIDATION_RESULTを処理する", () => {
    const expectedState = false;
    expect(
      inputValidationResult(true, { type: "HIDE_INPUT_VALIDATION_RESULT" })
    ).toBe(expectedState);
  });
});
