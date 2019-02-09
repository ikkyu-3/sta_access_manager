import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import MainFlame from "@components/MainFlame";

describe("MainFlame.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(<MainFlame>children</MainFlame>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    it("子要素が表示されている", () => {
      expect(
        shallow(
          <MainFlame>
            <div>children</div>
          </MainFlame>
        )
          .find(".main")
          .contains(<div>children</div>)
      ).toBeTruthy();
    });
  });
});
