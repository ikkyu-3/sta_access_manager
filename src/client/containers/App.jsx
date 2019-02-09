// @flow
import * as React from "react";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { hot } from "react-hot-loader";

// component, container
import MainFlame from "@containers/MainFlame";
import Top from "@containers/Top";
import Menu from "@containers/Menu";
import Purpose from "@containers/Purpose";
import Register from "@components/Register";
import Participant from "@containers/Participant";
import CompletionPage from "@components/CompletionPage";
import ErrorPage from "@components/ErrorPage";

// constants
import {
  TOP_PATH,
  PURPOSE_PATH,
  COMPLETION_PATH,
  REGISTER_PATH,
  PARTICIPANT_PATH,
  ERROR_PATH
} from "@constants";

import reducer from "@reducers";

import SocketProvider from "@modules/SocketProvider";

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    ...reducer,
    routerReducer
  }),
  compose(
    applyMiddleware(middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
  )
);

// create socket
const url = process.env.WS_SERVER_ORIGIN || "http://localhost:3000";
new SocketProvider(url, store).addEventListener();

function App(): React.Node {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <React.Fragment>
          <Menu />
          <Switch>
            <MainFlame>
              <Route exact path={TOP_PATH} component={Top} />
              <Route path={PURPOSE_PATH} component={Purpose} />
              <Route path={COMPLETION_PATH} component={CompletionPage} />
              <Route path={REGISTER_PATH} component={Register} />
              <Route path={PARTICIPANT_PATH} component={Participant} />
              <Route path={ERROR_PATH} component={ErrorPage} />
            </MainFlame>
          </Switch>
        </React.Fragment>
      </ConnectedRouter>
    </Provider>
  );
}
export default hot(module)(App);
