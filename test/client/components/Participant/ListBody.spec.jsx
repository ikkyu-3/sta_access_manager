import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import ListBody from "@components/Participant/ListBody";
import Purpose from "@components/Participant/Purpose";
import Status from "@components/Participant/Status";
import { shortParticipantData, longParticipantData } from "../testData";

describe("Participant.ListBody.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer
        .create(<ListBody listData={shortParticipantData} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    const listItems = shallow(
      <ListBody listData={shortParticipantData} />
    ).find("li");

    it("各li要素には、listDataで渡されたnameの値が表示されている", () => {
      listItems.forEach((node, index) => {
        expect(node.find(".columnName").text()).toBe(
          shortParticipantData[index].name
        );
      });
    });

    it("Purposeコンポーネントのpurposeに、listDataで渡されたpurposeの値が渡されている", () => {
      listItems.forEach((node, index) =>
        expect(
          node.contains(
            <Purpose purpose={shortParticipantData[index].purpose} />
          )
        )
      );
    });

    it("StatusコンポーネントのisEntryに、listDataで渡されたisEntryの値が渡されている", () => {
      listItems.forEach((node, index) =>
        expect(
          node.contains(
            <Status isEntry={shortParticipantData[index].isEntry} />
          )
        )
      );
    });

    it("listDataの長さが5以下の時、全ての要素はcssクラス: buttomを持つ", () => {
      listItems.forEach(node => {
        expect(node.hasClass("buttom")).toBeTruthy();
      });
    });

    it("listDataの長さが6以上の時、最後の要素のみcssクラス: buttomを持たない", () => {
      const longListItems = shallow(
        <ListBody listData={longParticipantData} />
      ).find("li");
      const { length } = longListItems;

      longListItems.forEach((node, index) => {
        if (index === length - 1) {
          expect(node.hasClass("buttom")).toBeFalsy();
        } else {
          expect(node.hasClass("buttom")).toBeTruthy();
        }
      });
    });
  });
});
