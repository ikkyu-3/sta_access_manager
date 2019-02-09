// @flow
import registerStep from "@reducers/registerStep";

describe("reducers/registerStep.jsのtest", () => {
  it("初期状態を取得できる", () => {
    const expectedState = "";
    expect(registerStep(undefined, { type: "@@INIT" })).toBe(expectedState);
  });

  it("type: CHANGE_REGISTER_STEPを処理する", () => {
    const expectedState = "input";
    expect(
      registerStep("", {
        type: "CHANGE_REGISTER_STEP",
        registerStep: "input"
      })
    ).toBe(expectedState);
  });

  it("type: CLEAR_REGISTER_STEPを処理する", () => {
    const expectedState = "";
    expect(registerStep("input", { type: "CLEAR_REGISTER_STEP" })).toBe(
      expectedState
    );
  });
});
