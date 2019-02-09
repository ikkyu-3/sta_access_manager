// @flow
import reducer from "@reducers";

describe("reducers/index.js", () => {
  it("9つのプロパティをもつ", () => {
    const props = [
      "firstName",
      "cardId",
      "inputValidationResult",
      "isConnected",
      "lastName",
      "userId",
      "participant",
      "registerStep",
      "selectedMenu"
    ];

    props.forEach(prop =>
      expect(Object.prototype.hasOwnProperty.call(reducer, prop))
    );
  });
});
