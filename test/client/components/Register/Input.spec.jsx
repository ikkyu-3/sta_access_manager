/* eslint-disable react/jsx-boolean-value */
import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Input from "@components/Register/Input";

const fn = () => {};

describe("Register/Input.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(
        <Input
          id="id"
          label="ラベル"
          error="エラー"
          value="value"
          canShow={true}
          onChange={fn}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    it("errorあり, canShowがtrueの時、エラーが表示される", () => {
      const input = shallow(
        <Input
          id="id"
          label="ラベル"
          error="エラー"
          value="value"
          canShow={true}
          onChange={fn}
        />
      );

      expect(input.find("span").hasClass("hidden")).toBeFalsy();
      expect(input.find("input").hasClass("bad")).toBeTruthy();
    });

    it("errorあり, canShowがfalseの時、エラーは表示されない", () => {
      const input = shallow(
        <Input
          id="id"
          label="ラベル"
          error="エラー"
          value="value"
          canShow={false}
          onChange={fn}
        />
      );

      expect(input.find("span").hasClass("hidden")).toBeTruthy();
      expect(input.find("input").hasClass("bad")).toBeFalsy();
    });

    it("input要素が変更された時、onChangeが実行される", () => {
      const mockChange = jest.fn();
      const input = shallow(
        <Input
          id="id"
          label="ラベル"
          error="エラー"
          value="value"
          canShow={false}
          onChange={mockChange}
        />
      );

      input.find("input").simulate("change", "test");
      expect(mockChange.mock.calls[0][0]).toBe("test");
    });
  });
});
