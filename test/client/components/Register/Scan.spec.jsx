import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Scan from "@components/Register/Scan";

const fn = () => {};

describe("Register/Scan.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(
        <Scan onChangeStep={fn} unmount={fn} onCancelButton={fn} />
      );
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    const onChangeStepMock = jest.fn();
    const unmountMock = jest.fn();

    let scan;

    beforeAll(() => {
      scan = shallow(
        <Scan
          onChangeStep={onChangeStepMock}
          unmount={unmountMock}
          onCancelButton={fn}
        />
      );
    });

    it("componentDidMountは、onChangeStepを実行する", () => {
      expect(onChangeStepMock).toBeCalled();
    });

    it("componentWillUnmountは、unmountを実行する", () => {
      scan.instance().componentWillUnmount();
      expect(unmountMock).toBeCalled();
    });
  });
});
