import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Purpose from "@components/Participant/Purpose";

describe("Participant.Purpose.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(<Purpose purpose="STUDY" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    it("purposeにSTUDYを指定した時、「自習」と表示される", () => {
      const purpose = shallow(<Purpose purpose="STUDY" />);
      expect(purpose.hasClass("study")).toBeTruthy();
      expect(purpose.text("自習")).toBeTruthy();
    });

    it("purposeにMEET_UPを指定した時、「勉強会」と表示される", () => {
      const purpose = shallow(<Purpose purpose="MEET_UP" />);
      expect(purpose.hasClass("meetUp")).toBeTruthy();
      expect(purpose.text("勉強会")).toBeTruthy();
    });

    it("purposeにWORKを指定した時、「仕事」と表示される", () => {
      const purpose = shallow(<Purpose purpose="WORK" />);
      expect(purpose.hasClass("work")).toBeTruthy();
      expect(purpose.text("仕事")).toBeTruthy();
    });

    it("purposeにcircleを指定した時、「サークル」と表示される", () => {
      const purpose = shallow(<Purpose purpose="CIRCLE" />);
      expect(purpose.hasClass("circle")).toBeTruthy();
      expect(purpose.text("サークル")).toBeTruthy();
    });

    it("purposeに上記以外の値を指定した時、表示されない", () => {
      const purpose = shallow(<Purpose purpose="test" />);
      expect(purpose.prop("className")).toBe("columnPurpose border ");
      expect(purpose.text()).toBe("");
    });
  });
});
