import { configure } from "@storybook/react";

function loadStories() {
  require("./stories/menu");
  require("./stories/top");
  require("./stories/mainFlame");
  require("./stories/purpose");
  require("./stories/common");
  require("./stories/participant");
  require("./stories/register");
}

configure(loadStories, module);
