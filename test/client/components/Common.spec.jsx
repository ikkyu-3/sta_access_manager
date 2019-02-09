import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Common from "@components/Common";

// Dateクラスをmock化
jest
  .spyOn(Date.prototype, "toLocaleString")
  .mockReturnValue("1970/01/01 00:00:00");

const setTimeoutSpy = jest
  .spyOn(window, "setTimeout")
  .mockImplementation(() => 999);

const clearTimeoutSpy = jest
  .spyOn(window, "clearTimeout")
  .mockImplementation(() => {});

const fn = () => {};
const factory = (values = {}) => {
  const { type, subText } = values;
  return shallow(
    <Common
      type={type}
      text="テキスト"
      subText={subText}
      buttonText="ボタン"
      buttonClass="default"
      onButtonClick={fn}
      autoPageTransition={fn}
    />
  );
};

describe("Common.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(
        <Common
          type="date"
          text="テキスト"
          subText="サブテキスト"
          buttonText="ボタン"
          buttonClass="default"
          onButtonClick={fn}
          autoPageTransition={fn}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    let defaultCommon;

    beforeAll(() => {
      defaultCommon = factory();
    });

    it("componentDidMountは、setTimeoutを実行する", () => {
      const [first, second] = setTimeoutSpy.mock.calls[0];
      expect(first).toBeInstanceOf(Function);
      expect(second).toBe(5000);
      expect(defaultCommon.instance().timeoutId).toBe(999);
    });

    it("componentWillUnmountは、clearTimeoutを実行する", () => {
      defaultCommon.instance().componentWillUnmount();
      const [first] = clearTimeoutSpy.mock.calls[0];
      expect(first).toBe(defaultCommon.instance().timeoutId);
    });

    it("typeがdateの時、時刻が表示されている", () => {
      const common = factory({ type: "date" });
      expect(common.find(".date").text()).toBe("1970/01/01 00:00:00");
    });

    it("typeが指定されていない時、時刻は表示されていない", () => {
      expect(defaultCommon.find(".date").exists()).toBeFalsy();
    });

    it("typeにdate以外が指定されている時、時刻は表示されていない", () => {
      const common = factory({ type: "hoge" });
      expect(common.find(".date").exists()).toBeFalsy();
    });

    it("textに渡した値が表示されている", () => {
      expect(defaultCommon.find(".main").text()).toBe("テキスト");
    });

    it("subTextが指定されている時、subTextに渡した値が表示されている", () => {
      const common = factory({ subText: "サブテキスト" });
      expect(common.exists(".sub")).toBeTruthy();
      expect(common.find(".sub").text()).toBe("サブテキスト");
    });

    it("subTextが指定されていない場合、表示されていない", () => {
      expect(defaultCommon.find(".sub").exists()).toBeFalsy();
    });

    it("SingleButtonコンポーネントに、buttonText, buttonClass, onButtonClickに指定した値が正常に渡されている", () => {
      const singleButton = factory()
        .find("SingleButton")
        .props();

      expect(singleButton.text).toBe("ボタン");
      expect(singleButton.className).toBe("default");
      expect(singleButton.onButtonClick).toBe(fn);
    });
  });
});
