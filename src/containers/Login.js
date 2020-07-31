import { connect } from "react-redux";
import LoginComponent from "../components/LoginComponent";
import { showLoader, hideLoader } from "../store/sharedReducer/action";

const mapStateToProps = state => ({
    accessToken: state.sharedReducer.accessToken
});

const mapDispatchToProps = dispatch => ({
    showLoader: () => dispatch(showLoader()),
    hideLoader: () => dispatch(hideLoader()),
});

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);

export default Login;
