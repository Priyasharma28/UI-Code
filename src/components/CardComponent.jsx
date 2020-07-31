import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }


  render() {
    return (
      <div className="col-md-4 col-10 mx-auto">
        <div className="card" style={{ marginTop: "18px" }} >
          <img className="card-img-top" src={this.props.imgsrc} alt={"Image not available"} />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <NavLink to={this.props.link} className="btn btn-warning" style={{ color: "red", fontWeight: "bold" }}>{this.props.btn}</NavLink>
          </div>
        </div>
      </div>
    );
  }
};

export default CardComponent;