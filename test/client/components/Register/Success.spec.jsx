import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Success from "@components/Register/Success";

const fn = () => {};

const setTimeoutSpy = jest
  .spyOn(window, "setTimeout")
  .mockImplementation(() => 999);

const clearTimeoutSpy = jest
  .spyOn(window, "clearTimeout")
  .mockImplementation(() => {});

describe("Register/Success.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(
        <Success onChangeStep={fn} sutoPageTransition={fn} onEntryButton={fn} />
      );
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    let failure;

    beforeAll(() => {
      failure = shallow(
        <Success onChangeStep={fn} sutoPageTransition={fn} onEntryButton={fn} />
      );
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
