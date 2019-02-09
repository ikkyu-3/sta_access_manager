import React from "react";
import renderer from "react-test-renderer";
import RegistrationIn from "@components/Register/RegistrationIn";

describe("RegistrationIn.jsxのテスト", () => {
  describe("スナッップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(<RegistrationIn />);
      expect(tree).toMatchSnapshot();
    });
  });
});
