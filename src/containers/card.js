import { connect } from "react-redux";
import CardComponent from "../components/CardComponent";
import { showLoader, hideLoader } from "../store/sharedReducer/action";

const mapStateToProps = state => ({
    accessToken: state.sharedReducer.accessToken
});

const mapDispatchToProps = dispatch => ({
    showLoader: () => dispatch(showLoader()),
    hideLoader: () => dispatch(hideLoader()),
});

const Card = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardComponent);

export default Card;
