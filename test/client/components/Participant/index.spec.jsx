import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Participant from "@components/Participant";
import { shortParticipantData } from "../testData";

const fn = () => {};

describe("Participantのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer
        .create(
          <Participant
            refresh={fn}
            selectedMenu={fn}
            getParticipant={fn}
            participant={shortParticipantData}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    const refreshMock = jest.fn();
    const selectedMenuMock = jest.fn();
    const getParticipantMock = jest.fn();
    let participant;

    beforeAll(() => {
      participant = shallow(
        <Participant
          refresh={refreshMock}
          selectedMenu={selectedMenuMock}
          getParticipant={getParticipantMock}
          participant={shortParticipantData}
        />
      );
    });

    it("componentDidMountは、refresh, selectedMenu, getParticipantを実行する", () => {
      expect(refreshMock).toBeCalled();
      expect(selectedMenuMock).toBeCalled();
      expect(getParticipantMock).toBeCalled();
    });

    it("ListBodyコンポーネントのlistDataに、dataで指定した値が渡されている", () => {
      expect(participant.find("ListBody").prop("listData")).toBe(
        shortParticipantData
      );
    });
  });
});
