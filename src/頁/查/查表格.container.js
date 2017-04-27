import { connect } from "react-redux";
import 查表格 from "./查表格";
import { 查詢語句 } from "../../actions";

// props from router params
const matchStateToProps = (state, ownProps) => ({
  語句: ownProps.語句,
  正在查詢: state.查詢.正在查詢,
});

const matchDispatchToProps = dispatch => ({
  requestSearch: (語句) => { dispatch(查詢語句(語句)); },
});

const Container查詢 = connect(
  matchStateToProps,
  matchDispatchToProps,
)(查表格);

export default Container查詢;
