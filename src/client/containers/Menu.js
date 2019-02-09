// @flow
import type { State, Dispatch } from "@types";

import { connect } from "react-redux";
import { push } from "react-router-redux";

import Menu from "@components/Menu";

const mapStateToProps = (state: State) => ({
  selectedMenu: state.selectedMenu
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onButtonClick: (path: string) => {
    dispatch(push(path));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
