import { connect } from "react-redux";
import SignupComponent from "../components/SignupComponent";
import { showLoader, hideLoader } from "../store/sharedReducer/action";

const mapStateToProps = state => ({
    accessToken: state.sharedReducer.accessToken
});

const mapDispatchToProps = dispatch => ({
    showLoader: () => dispatch(showLoader()),
    hideLoader: () => dispatch(hideLoader()),
});

const Signup = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupComponent);

export default Signup;
