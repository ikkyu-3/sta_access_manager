import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Menu from "@components/Menu";

const fn = () => {};

describe("Menu.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer
        .create(<Menu selectedMenu="top" onButtonClick={fn} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    it("currentに「入退室処理」を指定した時、「入退室処理」ボタンが選択されている", () => {
      const buttons = shallow(
        <Menu selectedMenu="top" onButtonClick={fn} />
      ).find("button");
      expect(buttons.at(0).hasClass("selected")).toBeTruthy();
      expect(buttons.at(1).hasClass("selected")).toBeFalsy();
      expect(buttons.at(2).hasClass("selected")).toBeFalsy();
    });

    it("currentに「ユーザ登録」を指定した時、「ユーザ登録」ボタンが選択されている", () => {
      const buttons = shallow(
        <Menu selectedMenu="register" onButtonClick={fn} />
      ).find("button");
      expect(buttons.at(0).hasClass("selected")).toBeFalsy();
      expect(buttons.at(1).hasClass("selected")).toBeTruthy();
      expect(buttons.at(2).hasClass("selected")).toBeFalsy();
    });

    it("currentに「利用者一覧」を指定した時、「利用者一覧」ボタンが選択されている", () => {
      const buttons = shallow(
        <Menu selectedMenu="participant" onButtonClick={fn} />
      ).find("button");
      expect(buttons.at(0).hasClass("selected")).toBeFalsy();
      expect(buttons.at(1).hasClass("selected")).toBeFalsy();
      expect(buttons.at(2).hasClass("selected")).toBeTruthy();
    });

    it("currentに何も指定しない時、どのボタンも選択されていない", () => {
      const buttons = shallow(<Menu selectedMenu="" onButtonClick={fn} />).find(
        "button"
      );
      expect(buttons.at(0).hasClass("selected")).toBeFalsy();
      expect(buttons.at(1).hasClass("selected")).toBeFalsy();
      expect(buttons.at(2).hasClass("selected")).toBeFalsy();
    });

    describe("buttonをクリック時", () => {
      const onButtonClick = jest.fn();
      let menu;

      beforeEach(() => {
        menu = shallow(<Menu selectedMenu="" onButtonClick={onButtonClick} />);
        onButtonClick.mockReset();
      });

      it("「入退室処理」をクリックした時、引数に'入退室処理'が渡される", () => {
        menu
          .find("button")
          .at(0)
          .simulate("click");
        expect(onButtonClick.mock.calls[0][0]).toBe("/");
      });

      it("「ユーザ登録」をクリックした時、引数に'ユーザ登録'が渡される", () => {
        menu
          .find("button")
          .at(1)
          .simulate("click");
        expect(onButtonClick.mock.calls[0][0]).toBe("/register");
      });

      it("「利用者一覧」をクリックした時、引数に'利用者一覧'が渡される", () => {
        menu
          .find("button")
          .at(2)
          .simulate("click");
        expect(onButtonClick.mock.calls[0][0]).toBe("/participant");
      });
    });
  });
});
