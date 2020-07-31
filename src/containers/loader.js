import { connect } from "react-redux";
import LoaderComponent from "../components/LoaderComponent";

const mapStateToProps = state => ({
    isShowLoader: state.sharedReducer.isShowLoader
});

const mapDispatchToProps = dispatch => ({
    
});

const Loader = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoaderComponent);

export default Loader;
