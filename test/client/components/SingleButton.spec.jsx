import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import SingleButton from "@components/SingleButton";

const fn = () => {};

describe("SingleButton.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(
        <SingleButton
          text="Single Button"
          className="default"
          onButtonClick={fn}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    const onClick = jest.fn();
    const button = shallow(
      <SingleButton text="Single Button" onButtonClick={onClick} />
    ).find("button");

    it("classNameを指定しない時、ボタン表示はdefaultスタイルである", () => {
      expect(button.hasClass("default")).toBeTruthy();
    });

    it("textに渡した値が、文表示される", () => {
      expect(button.text("Single Button")).toBeTruthy();
    });

    it("ボタンをクリックすると、onButtonClickに渡した関数が実行される", () => {
      button.simulate("click");
      expect(onClick).toBeCalled();
    });

    it("classNameにnextと指定した時、ボタン表示はnextスタイルである", () => {
      const nextButton = shallow(
        <SingleButton text="Next" className="next" onButtonClick={fn} />
      );
      expect(nextButton.find("button").hasClass("next")).toBeTruthy();
    });
  });
});
