// @flow
import * as actions from "@actions";

describe("actions.js", () => {
  it("リクエスト開始アクションが作成される ", () => {
    const expectedAction = { type: "REQUEST_START" };
    expect(actions.requestStart()).toEqual(expectedAction);
  });

  it("リクエスト終了アクションが作成される", () => {
    const expectedAction = { type: "REQUEST_END" };
    expect(actions.requestEnd()).toEqual(expectedAction);
  });

  it("CARD ID追加アクションが作成される", () => {
    const cardId = "00000000000000000000";
    const expectedAction = { type: "ADD_CARD_ID", cardId };
    expect(actions.addCardId(cardId)).toEqual(expectedAction);
  });

  it("CARD ID削除アクションが作成される", () => {
    const expectedAction = { type: "REMOVE_CARD_ID" };
    expect(actions.removeCardId()).toEqual(expectedAction);
  });

  it("入退室処理選択アクションが作成される", () => {
    const expectedAction = { type: "SELECT_TOP" };
    expect(actions.selectTop()).toEqual(expectedAction);
  });

  it("ユーザ登録選択アクションが作成される", () => {
    const expectedAction = { type: "SELECT_REGISTER" };
    expect(actions.selectRegister()).toEqual(expectedAction);
  });

  it("利用者一覧選択アクションが作成される", () => {
    const expectedAction = { type: "SELECT_PARTICIPANT" };
    expect(actions.selectParticipant()).toEqual(expectedAction);
  });

  it("名の変更アクションが作成される", () => {
    const firstName = "firstName";
    const expectedAction = { type: "CHANGE_FIRST_NAME", firstName };
    expect(actions.changeFirstName(firstName)).toEqual(expectedAction);
  });

  it("名の初期化アクションが作成される", () => {
    const expectedAction = { type: "CLEAR_FIRST_NAME" };
    expect(actions.clearFirstName()).toEqual(expectedAction);
  });

  it("姓の変更アクションが作成される", () => {
    const lastName = "lastName";
    const expectedAction = { type: "CHANGE_LAST_NAME", lastName };
    expect(actions.changeLastName(lastName)).toEqual(expectedAction);
  });

  it("姓の初期化アクションが作成される", () => {
    const expectedAction = { type: "CLEAR_LAST_NAME" };
    expect(actions.clearLastName()).toEqual(expectedAction);
  });

  it("USER IDの変更アクションが作成される", () => {
    const userId = "0000000000";
    const expectedAction = { type: "CHANGE_USER_ID", userId };
    expect(actions.changeUserId(userId)).toEqual(expectedAction);
  });

  it("USER IDの初期化アクションが作成される", () => {
    const expectedAction = { type: "CLEAR_USER_ID" };
    expect(actions.clearUserId()).toEqual(expectedAction);
  });

  it("登録ステップ変更アクションが作成される", () => {
    const registerStep = "registerStep";
    const expectedAction = { type: "CHANGE_REGISTER_STEP", registerStep };
    expect(actions.changeRegisterStep(registerStep)).toEqual(expectedAction);
  });

  it("登録ステップ初期化アクションが作成される", () => {
    const expectedAction = { type: "CLEAR_REGISTER_STEP" };
    expect(actions.clearRegisterStep()).toEqual(expectedAction);
  });

  it("検証結果表示アクションが作成される", () => {
    const expectedAction = { type: "SHOW_INPUT_VALIDATION_RESULT" };
    expect(actions.showInputValidationResult()).toEqual(expectedAction);
  });

  it("検証結果非表示アクションが作成される", () => {
    const expectedAction = { type: "HIDE_INPUT_VALIDATION_RESULT" };
    expect(actions.hideInputValidationResult()).toEqual(expectedAction);
  });

  it("参加者一覧追加アクションが作成される", () => {
    const participant = [
      {
        userId: "id",
        name: "name",
        purpose: "MEET_UP",
        isEntry: true,
        entryTime: "entryTime"
      }
    ];
    const expectedAction = { type: "SET_PARTICIPANT", participant };
    expect(actions.setParticipantAction(participant)).toEqual(expectedAction);
  });

  it("参加者一覧削除アクションが作成される", () => {
    const expectedAction = { type: "REMOVE_PARTICIPANT" };
    expect(actions.removeParticipant()).toEqual(expectedAction);
  });
});
