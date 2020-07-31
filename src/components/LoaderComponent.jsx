import React, { Component } from "react";
import Modal from "react-modal";
import { FadeLoader } from "react-spinners";
import "../assets/css/Modal.css";

class LoaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    Modal.setAppElement("body");
  }

  render() {
    return (
      <React.Fragment>
        {this.props.isShowLoader ? (
          <Modal
            isOpen={this.props.isShowLoader}
            onRequestClose={() => console.log("")}
            className="loader-modal"
            shouldCloseOnOverlayClick={false}
          >
            <FadeLoader
              sizeUnit={"px"}
              size={200}
              color={"#fff"}
              loading={true}
            />
          </Modal>
        ) : null}
      </React.Fragment>
    );
  }
}

export default LoaderComponent;
