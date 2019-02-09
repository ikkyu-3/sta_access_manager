// @flow
import * as React from "react";
import { Route, Switch } from "react-router";

import RegisterHeader from "@containers/RegisterHeader";
import RegisterInput from "@containers/RegisterInput";
import RegisterScan from "@containers/RegisterScan";
import RegistrationIn from "@components/Register/RegistrationIn";
import RegisterSuccess from "@containers/RegisterSuccess";
import RegisterFailed from "@containers/RegisterFailure";

import {
  REGISTER_SCAN_PATH,
  REGISTER_REGISTRATION_IN_PATH,
  REGISTER_SUCCESS_PATH,
  REGISTER_FAILURE_PATH,
  REGISTER_PATH
} from "@constants";

import styles from "./style.css";

function Register(): React.Node {
  const { container } = styles;
  return (
    <div className={container}>
      <RegisterHeader />
      <Switch>
        <Route path={REGISTER_SCAN_PATH} component={RegisterScan} />
        <Route
          path={REGISTER_REGISTRATION_IN_PATH}
          component={RegistrationIn}
        />
        <Route path={REGISTER_SUCCESS_PATH} component={RegisterSuccess} />
        <Route path={REGISTER_FAILURE_PATH} component={RegisterFailed} />
        <Route path={REGISTER_PATH} component={RegisterInput} />
      </Switch>
    </div>
  );
}
export default Register;
