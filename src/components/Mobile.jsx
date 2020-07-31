import React, { Component } from 'react';
import vivo from '../assets/images/vivo.jpg';
import oppo from '../assets/images/oppo.jpg';
import realme from '../assets/images/realme.jpg';
import realme2 from '../assets/images/realme2.jpg';
import samsung from '../assets/images/samsung.jpg';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { NavLink } from 'react-router-dom';
import "../assets/css/Common_style.css";



class Mobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }


  render() {
    return (
      <div className="div" style={{ padding:"15px",margin:"10px",boxShadow: "0px 0px 40px 0px grey"}}>
      <h2 className="text-center heading"  style={{fontWeight:"bold",backgroundColor:"rgb(237,210,163)"}}>Mobiles</h2>
      
      
      <OwlCarousel className="owl-theme" loop margin={10}  items={4} autoplay={true} autoplaySpeed={500} autoplayTimeout={1500} style={{fontSize:"40px" ,marginTop:"20px"}}>
              <div className="item">
                <img src={vivo} className="mobile-img" /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Vivo<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹15,000</del><br></br>₹12,000</span></h4>
              </div>
              <div className="item">
                <img src={oppo} className="mobile-img" /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Oppo<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹18,000</del><br></br>₹16,000</span></h4>
              </div>
              <div className="item">
                <img src={realme} className="mobile-img" /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Realme<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹19,000</del><br></br>₹18,000</span></h4>
              </div>
              <div className="item">
                <img src={realme2} className="mobile-img" /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Oneplus<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹20,000</del><br></br>₹19,000</span></h4>
              </div>
              <div className="item">
                <img src={samsung} className="mobile-img" /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Samsung<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹13,000</del><br></br>₹12,000</span></h4>
              </div>
            </OwlCarousel>
            <div className="text-right">
            <NavLink id="navv" to="/" className="btn btn-primary product_button" style={{marginRight:"40px",fontWeight:"bold",marginBottom:"30px"}}>View All</NavLink>
            </div>
      </div>
    );
  }
};

export default Mobile;