// @flow
import * as React from "react";
import { Route, Switch } from "react-router";

import CompletionEntrance from "@containers/CompletionEntrance";
import CompletionExit from "@containers/CompletionExit";

import { COMPLETION_ENTRANCE_PATH, COMPLETION_EXIT_PATH } from "@constants";

function CompletionPage(): React.Node {
  return (
    <Switch>
      <Route path={COMPLETION_ENTRANCE_PATH} component={CompletionEntrance} />
      <Route path={COMPLETION_EXIT_PATH} component={CompletionExit} />
    </Switch>
  );
}
export default CompletionPage;
