// @flow
import isConnected from "@reducers/isConnected";

describe("reducers/inConnected.jsのtest", () => {
  it("初期状態を取得できる", () => {
    const expectedState = false;
    expect(isConnected(undefined, { type: "@@INIT" })).toBe(expectedState);
  });

  it("type: REQUEST_STARTを処理する", () => {
    const expectedState = true;
    expect(isConnected(false, { type: "REQUEST_START" })).toBe(expectedState);
  });

  it("type: REQUEST_ENDを処理する", () => {
    const expectedState = false;
    expect(isConnected(true, { type: "REQUEST_END" })).toBe(expectedState);
  });
});
