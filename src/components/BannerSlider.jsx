import React, { Component } from 'react';
import phone from '../assets/images/phone.png';
import vege from '../assets/images/vege.png';
import patanjali from '../assets/images/patanjali.jpeg';
import fruits from '../assets/images/fruits.jpg';
import "../assets/css/Banner_style.css";

class BannerSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }


  render() {
    return (
      <section id="header" style={{ marginTop: "20px" }}>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" >
            <div className="carousel-item active" >
              <img className="d-block w-100 carousel-img" src={phone} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 carousel-img" src={vege} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 carousel-img" src={patanjali} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 carousel-img" src={fruits} alt="Third slide" />
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default BannerSlider;