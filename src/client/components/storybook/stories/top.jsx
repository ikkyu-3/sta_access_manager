import React from "react";
import { storiesOf } from "@storybook/react";
import MainFlame from "@components/MainFlame";
import Top from "@components/Top";
import DummyContainer from "../DummyContainer";

storiesOf("Top", module).add("トップ画面", () => (
  <DummyContainer>
    <MainFlame type="default">
      <Top />
    </MainFlame>
  </DummyContainer>
));
