import React from "react";
import { storiesOf } from "@storybook/react";
import MainFlame from "@components/MainFlame";
import Participant from "@components/Participant";
import DummyContainer from "../DummyContainer";

// demo data
const data = [
  {
    name: "名前1",
    purpose: "study",
    isEntry: true
  },
  {
    name: "名前2",
    purpose: "meetUp",
    isEntry: true
  },
  {
    name: "名前3",
    purpose: "work",
    isEntry: true
  },
  {
    name: "名前4",
    purpose: "circle",
    isEntry: true
  },
  {
    name: "名前5",
    purpose: "circle",
    isEntry: true
  },
  {
    name: "名前6",
    purpose: "circle",
    isEntry: true
  },
  {
    name: "名前7",
    purpose: "circle",
    isEntry: true
  },
  {
    name: "名前8",
    purpose: "meetUp",
    isEntry: false
  },
  {
    name: "名前9",
    purpose: "work",
    isEntry: false
  },
  {
    name: "名前10",
    purpose: "work",
    isEntry: false
  },
  {
    name: "名前11",
    purpose: "meetUp",
    isEntry: false
  }
];

storiesOf("Participant", module).add("参加者一覧", () => (
  <DummyContainer>
    <MainFlame type="standard">
      <Participant data={data} />
    </MainFlame>
  </DummyContainer>
));
