/* eslint-disable react/jsx-boolean-value */
import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Failure from "@components/Register/Failure";

const fn = () => {};

const setTimeoutSpy = jest
  .spyOn(window, "setTimeout")
  .mockImplementation(() => 999);

const clearTimeoutSpy = jest
  .spyOn(window, "clearTimeout")
  .mockImplementation(fn);

describe("Register/Failure.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(
        <Failure autoPageTransition={fn} onBackButton={fn} />
      );
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    let failure;

    beforeAll(() => {
      failure = shallow(<Failure autoPageTransition={fn} onBackButton={fn} />);
    });

    it("componentDidMountは、setTimeoutを実行する", () => {
      const [first, second] = setTimeoutSpy.mock.calls[0];
      expect(first).toBeInstanceOf(Function);
      expect(second).toBe(5000);
      expect(failure.instance().timeoutId).toBe(999);
    });

    it("componentWillUnmountは、clearTimeoutを実行する", () => {
      failure.instance().componentWillUnmount();
      const [first] = clearTimeoutSpy.mock.calls[0];
      expect(first).toBe(failure.instance().timeoutId);
    });
  });
});
