import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import InputForm from "@components/Register/InputForm";

const fn = () => {};
const domain = "exsample.com";
process.env.MAIL_DOMAIN = domain;

describe("Register/InputForm.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(
        <InputForm
          selectedMenu={fn}
          onChangeStep={fn}
          unmount={fn}
          canShow={false}
          firstNameValue="firstName"
          firstNameError=""
          onChangeFirstName={fn}
          lastNameValue="lastName"
          lastNameError=""
          onChangeLastName={fn}
          userIdValue="userId"
          userIdError=""
          onChangeUserId={fn}
          onClickNextButton={fn}
          onSubmitForm={fn}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    const selectedMenuMock = jest.fn();
    const onChangeStepMock = jest.fn();
    const unmount = jest.fn();

    let inputForm;

    beforeAll(() => {
      inputForm = shallow(
        <InputForm
          selectedMenu={selectedMenuMock}
          onChangeStep={onChangeStepMock}
          unmount={unmount}
          canShow={false}
          firstNameValue="firstName"
          firstNameError=""
          onChangeFirstName={fn}
          lastNameValue="lastName"
          lastNameError=""
          onChangeLastName={fn}
          userIdValue="userId"
          userIdError=""
          onChangeUserId={fn}
          onClickNextButton={fn}
          onSubmitForm={fn}
        />
      );
    });

    it("componentDidMountは、selectedMenu, onChangeStepを実行する", () => {
      expect(selectedMenuMock).toBeCalled();
      expect(onChangeStepMock).toBeCalled();
    });

    it("componentWillUnmountは、unmountを実行する", () => {
      inputForm.instance().componentWillUnmount();
      expect(unmount).toBeCalled();
    });
  });
});
