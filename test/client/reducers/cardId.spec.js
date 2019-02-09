// @flow
import cardId from "@reducers/cardId";

describe("reducers/cardId.js", () => {
  it("初期状態を取得できる", () => {
    const expectedState = "";
    expect(cardId(undefined, { type: "@@INIT" })).toBe(expectedState);
  });

  it("type: ADD_CARD_IDを処理する", () => {
    const expectedState = "0000000000000000";
    expect(
      cardId("", { type: "ADD_CARD_ID", cardId: "0000000000000000" })
    ).toBe(expectedState);
  });

  it("type: REMOVE_CARD_IDを処理する", () => {
    const expectedState = "";
    expect(cardId("0000000000000000", { type: "REMOVE_CARD_ID" })).toBe(
      expectedState
    );
  });
});
