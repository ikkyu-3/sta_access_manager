// @flow
import type { State } from "@types";

import { connect } from "react-redux";
import Header from "@components/Register/Header";

const mapStateToProps = (state: State) => ({
  registerStep: state.registerStep
});

export default connect(mapStateToProps)(Header);
