import { connect } from "react-redux";
import CartComponent from "../components/CartComponent";
import { showLoader, hideLoader } from "../store/sharedReducer/action";

const mapStateToProps = state => ({
    accessToken: state.sharedReducer.accessToken
});

const mapDispatchToProps = dispatch => ({
    showLoader: () => dispatch(showLoader()),
    hideLoader: () => dispatch(hideLoader()),
});

const Cart = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartComponent);

export default Cart;
