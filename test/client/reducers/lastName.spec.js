// @flow
import lastName from "@reducers/lastName";

describe("reducers/lastName.jsのtest", () => {
  it("初期状態を取得できる", () => {
    const expectedState = "";
    expect(lastName(undefined, { type: "@@INIT" })).toBe(expectedState);
  });

  it("type: CHANGE_LAST_NAMEを処理する", () => {
    const expectedState = "lastName";
    expect(
      lastName("", { type: "CHANGE_LAST_NAME", lastName: "lastName" })
    ).toBe(expectedState);
  });

  it("type: CLEAR_LAST_NAMEを処理する", () => {
    const expectedState = "";
    expect(lastName("lastName", { type: "CLEAR_LAST_NAME" })).toBe(
      expectedState
    );
  });
});
