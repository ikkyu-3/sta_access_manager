import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Top from "@components/Top";

const fn = () => {};

describe("Top.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(<Top refresh={fn} selectedMenu={fn} />);
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    const refreshMock = jest.fn();
    const selectedMenuMock = jest.fn();

    beforeAll(() =>
      shallow(<Top refresh={refreshMock} selectedMenu={selectedMenuMock} />));

    it("componentDidMountは、refreshを実行する", () => {
      expect(refreshMock).toBeCalled();
    });

    it("componentDidMountは、selectedMenuを実行する", () => {
      expect(selectedMenuMock).toBeCalled();
    });
  });
});
