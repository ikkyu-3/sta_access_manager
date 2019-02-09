// @flow
import firstName from "@reducers/firstName";

describe("reducers/firstName.jsのtest", () => {
  it("初期状態を取得できる", () => {
    const expectedState = "";
    expect(firstName(undefined, { type: "@@INIT" })).toBe(expectedState);
  });

  it("type: CHANGE_FIRST_NAMEを処理する", () => {
    const expectedState = "firstName";
    expect(
      firstName("", { type: "CHANGE_FIRST_NAME", firstName: "firstName" })
    ).toBe(expectedState);
  });

  it("type: CLEAR_FIRST_NAMEを処理する", () => {
    const expectedState = "";
    expect(firstName("firstName", { type: "CLEAR_FIRST_NAME" })).toBe(
      expectedState
    );
  });
});
