import { connect } from "react-redux";
import NavbarComponent from "../components/NavbarComponent";
import { showLoader, hideLoader } from "../store/sharedReducer/action";

const mapStateToProps = state => ({
    accessToken: state.sharedReducer.accessToken
});

const mapDispatchToProps = dispatch => ({
    showLoader: () => dispatch(showLoader()),
    hideLoader: () => dispatch(hideLoader()),
});

const Navbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarComponent);

export default Navbar;
