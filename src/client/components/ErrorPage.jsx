// @flow
import * as React from "react";
import { Route, Switch } from "react-router";

import ErrorBadRequest from "@containers/ErrorBadRequest";
import ErrorNotFound from "@containers/ErrorNotFound";
import ErrorServerError from "@containers/ErrorServerError";

import {
  ERROR_BAD_REQUEST_PATH,
  ERROR_NOT_FOUND_PATH,
  ERROR_INTERNAL_SERVER_ERROR_PAHT
} from "@constants";

function ErrorPage(): React.Node {
  return (
    <Switch>
      <Route path={ERROR_BAD_REQUEST_PATH} component={ErrorBadRequest} />
      <Route path={ERROR_NOT_FOUND_PATH} component={ErrorNotFound} />
      <Route
        path={ERROR_INTERNAL_SERVER_ERROR_PAHT}
        component={ErrorServerError}
      />
    </Switch>
  );
}
export default ErrorPage;
