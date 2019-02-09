// @flow
import selectedMenu from "@reducers/selectedMenu";
import { TOP, REGISTER, PARTICIPANT } from "@constants";

describe("reducers/selectedMenu.jsのtest", () => {
  it("初期状態を取得できる", () => {
    const expectedState = TOP;
    expect(selectedMenu(undefined, { type: "@@INIT" })).toBe(expectedState);
  });

  it("type: SELECT_TOPを処理する", () => {
    const expectedState = TOP;
    expect(selectedMenu("", { type: "SELECT_TOP" })).toBe(expectedState);
  });

  it("type: SELECT_REGISTERを処理する", () => {
    const expectedState = REGISTER;
    expect(selectedMenu("", { type: "SELECT_REGISTER" })).toBe(expectedState);
  });

  it("type: SELECT_PARTICIPANTを処理する", () => {
    const expectedState = PARTICIPANT;
    expect(selectedMenu("", { type: "SELECT_PARTICIPANT" })).toBe(
      expectedState
    );
  });
});
