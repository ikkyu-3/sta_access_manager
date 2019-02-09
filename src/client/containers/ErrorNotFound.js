// @flow
import type { Dispatch } from "@types";

import { connect } from "react-redux";
import { push } from "react-router-redux";

import { selectTop, selectRegister } from "@actions";
import Common from "@components/Common";
import { TOP_PATH, REGISTER_PATH } from "@constants";

const mapStateToProps = () => ({
  text: "404 Not Found",
  subText: "使用するには登録が必要です",
  buttonText: "登録はこちら",
  buttonClass: "next"
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  autoPageTransition: () => {
    dispatch(push(TOP_PATH));
    dispatch(selectTop());
  },
  onButtonClick: (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(push(REGISTER_PATH));
    dispatch(selectRegister());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Common);
