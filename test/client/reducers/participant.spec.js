// @flow
import participant from "@reducers/participant";

describe("reducers/participant.jsのtest", () => {
  it("初期状態を取得できる", () => {
    const expectedState = [];
    expect(participant(undefined, { type: "@@INIT" })).toEqual(expectedState);
  });

  it("type: SET_PARTICIPANTを処理する", () => {
    const expectedState = [
      {
        id: "id",
        user: {
          name: "name",
          isEntry: true,
          purpose: "STUDY"
        }
      }
    ];
    expect(
      participant([], {
        type: "SET_PARTICIPANT",
        participant: [
          {
            id: "id",
            user: {
              name: "name",
              isEntry: true,
              purpose: "STUDY"
            }
          }
        ]
      })
    ).toEqual(expectedState);
  });

  it("type: REMOVE_PARTICIPANTを処理する", () => {
    const expectedState = [];
    expect(
      participant(
        [
          {
            id: "id",
            user: {
              name: "name",
              isEntry: true,
              purpose: "STUDY"
            }
          }
        ],
        { type: "REMOVE_PARTICIPANT" }
      )
    ).toEqual(expectedState);
  });
});
