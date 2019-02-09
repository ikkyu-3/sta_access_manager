import React from "react";
import renderer from "react-test-renderer";
import ListHeader from "@components/Participant/ListHeader";

describe("Participant.ListHeader.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(<ListHeader />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
