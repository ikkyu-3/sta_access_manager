// @flow
import userId from "@reducers/userId";

describe("reducers/userId.js", () => {
  it("初期状態を取得できる", () => {
    const expectedState = "";
    expect(userId(undefined, { type: "@@INIT" })).toBe(expectedState);
  });

  it("type: CHANGE_USER_IDを処理する", () => {
    const expectedState = "userId";
    expect(
      userId("", {
        type: "CHANGE_USER_ID",
        userId: "userId"
      })
    ).toBe(expectedState);
  });

  it("type: CLEAR_USER_IDを処理する", () => {
    const expectedState = "";
    expect(userId("userId", { type: "CLEAR_USER_ID" })).toBe(expectedState);
  });
});
