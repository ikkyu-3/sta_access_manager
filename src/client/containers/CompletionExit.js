// @flow
import type { Dispatch } from "@types";

import { connect } from "react-redux";
import { push } from "react-router-redux";

import { selectTop } from "@actions";
import Common from "@components/Common";
import { TOP_PATH } from "@constants";

const mapStateToProps = () => ({
  type: "date",
  text: "お疲れ様でした",
  subText: "退出処理が完了しました",
  buttonText: "Topへ戻る",
  buttonClass: "default"
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  autoPageTransition: () => {
    dispatch(push(TOP_PATH));
    dispatch(selectTop());
  },
  onButtonClick: (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(push(TOP_PATH));
    dispatch(selectTop());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Common);
