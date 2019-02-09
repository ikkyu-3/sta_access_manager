import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Header from "@components/Register/Header";

describe("Register/Header.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(<Header registerStep="input" />);
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    describe("registerStepにinputを指定した時", () => {
      let header;

      beforeAll(() => {
        header = shallow(<Header registerStep="input" />).find("li");
      });

      it("li要素の0番目の子要素は、cssクラス: activeを持つ", () => {
        expect(header.at(0).hasClass("active")).toBeTruthy();
      });

      it("li要素の1番目の子要素は、cssクラス: disabledを持つ", () => {
        expect(header.at(1).hasClass("disabled")).toBeTruthy();
      });

      it("li要素の2番目の子要素は、cssクラス: disabledを持つ", () => {
        expect(header.at(2).hasClass("disabled")).toBeTruthy();
      });
    });

    describe("registerStepにscanを指定した時", () => {
      let header;

      beforeAll(() => {
        header = shallow(<Header registerStep="scan" />).find("li");
      });

      it("li要素の0番目の子要素は、クラスを持たない(classNameは、undifined)", () => {
        expect(header.at(0).props().className).toBeUndefined();
      });

      it("li要素の1番目の子要素は、cssクラス: activeを持つ", () => {
        expect(header.at(1).hasClass("active")).toBeTruthy();
      });

      it("li要素の2番目の子要素は、cssクラス: disabledを持つ", () => {
        expect(header.at(2).hasClass("disabled")).toBeTruthy();
      });
    });

    describe("registerStepにcompletionを指定した時", () => {
      let header;

      beforeAll(() => {
        header = shallow(<Header registerStep="completion" />).find("li");
      });

      it("li要素の0番目の子要素は、クラスを持たない(classNameは、undifined)", () => {
        expect(header.at(0).props().className).toBeUndefined();
      });

      it("li要素の1番目の子要素は、クラスを持たない(classNameは、undifined)", () => {
        expect(header.at(1).props().className).toBeUndefined();
      });

      it("li要素の2番目の子要素は、cssクラス: activeを持つ", () => {
        expect(header.at(2).hasClass("active")).toBeTruthy();
      });
    });

    describe("currentに値を指定しなかった時", () => {
      let header;

      beforeAll(() => {
        header = shallow(<Header registerStep="" />).find("li");
      });

      it("li要素の0番目の子要素は、クラスを持たない(classNameは、disabled)", () => {
        expect(header.at(0).hasClass("disabled")).toBeTruthy();
      });

      it("li要素の1番目の子要素は、クラスを持たない(classNameは、undifined)", () => {
        expect(header.at(1).hasClass("disabled")).toBeTruthy();
      });

      it("li要素の2番目の子要素は、クラスを持たない(classNameは、undifined)", () => {
        expect(header.at(2).hasClass("disabled")).toBeTruthy();
      });
    });
  });
});
