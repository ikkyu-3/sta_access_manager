import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Purpose from "@components/Purpose";

describe("Purpose.jsx", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const fn = () => {};
      const tree = renderer
        .create(
          <Purpose
            checkCardId={fn}
            removeCardId={fn}
            onPurposeButtonClick={fn}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    const checkCardIdMock = jest.fn();
    const removeCardIdMock = jest.fn();
    const onPurposeButtonClickMock = jest.fn();
    let purpose;

    beforeAll(() => {
      purpose = shallow(
        <Purpose
          checkCardId={checkCardIdMock}
          removeCardId={removeCardIdMock}
          onPurposeButtonClick={onPurposeButtonClickMock}
        />
      );
    });

    beforeEach(() => {
      onPurposeButtonClickMock.mockClear();
    });

    it("componentDidMountは、checkIdを実行する", () => {
      expect(checkCardIdMock).toBeCalled();
    });

    it("componentWillUnmountは、removeIdを実行する", () => {
      purpose.instance().componentWillUnmount();
      expect(removeCardIdMock).toBeCalled();
    });

    it("勉強会をクリックしたら、onPurposeButtonClickが実行される", () => {
      purpose.find("#meetup").simulate("click");
      expect(onPurposeButtonClickMock).toBeCalled();
    });

    it("仕事をクリックしたら、onPurposeButtonClickMockが実行される", () => {
      purpose.find("#work").simulate("click");
      expect(onPurposeButtonClickMock).toBeCalled();
    });

    it("自習をクリックしたら、onPurposeButtonClickMockが実行される", () => {
      purpose.find("#study").simulate("click");
      expect(onPurposeButtonClickMock).toBeCalled();
    });

    it("サークルをクリックしたら、onPurposeButtonClickMockが実行される", () => {
      purpose.find("#circle").simulate("click");
      expect(onPurposeButtonClickMock).toBeCalled();
    });
  });
});
