/* eslint-disable react/jsx-boolean-value */
import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Status from "@components/Participant/Status";

describe("Participant.Status.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(<Status isEntry />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    it("isEntryがtrueの時、「入」と表示される", () => {
      const status = shallow(<Status isEntry={true} />);
      expect(status.hasClass("entry")).toBeTruthy();
      expect(status.text("入")).toBeTruthy();
    });

    it("isEntryがfalseの時、「退」と表示される", () => {
      const status = shallow(<Status isEntry={false} />);
      expect(status.hasClass("exit")).toBeTruthy();
      expect(status.text("退")).toBeTruthy();
    });
  });
});
