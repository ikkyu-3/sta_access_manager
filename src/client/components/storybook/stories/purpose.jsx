import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import MainFlame from "@components/MainFlame";
import Purpose from "@components/Purpose";
import DummyContainer from "../DummyContainer";

storiesOf("Purpose", module).add("目的選択画面", () => (
  <DummyContainer>
    <MainFlame type="default">
      <Purpose
        onMeetUpButtonClick={action("勉強会")}
        onWorkButtonClick={action("仕事")}
        onStudyButtonClick={action("自習")}
        onCircleButtonClick={action("サークル")}
      />
    </MainFlame>
  </DummyContainer>
));
