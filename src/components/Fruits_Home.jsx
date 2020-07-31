import React, { Component } from 'react';
import apple from '../assets/images/apple.jpg';
import banana from '../assets/images/banana.jpg';
import watermelon from '../assets/images/watermelon.jpg';
import pomegranate from '../assets/images/pomegranate.jpg';
import grapes from '../assets/images/grapes.jpg';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {NavLink} from 'react-router-dom';
import "../assets/css/Common_style.css";



class Fruits_Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }


  render() {

    return(

       
        <div className="div" style={{ padding:"15px",margin:"10px",boxShadow: "0px 0px 40px 0px grey"}}>
<h2 className="text-center heading"  style={{fontWeight:"bold",backgroundColor:"rgb(237,210,163)"}}>Fresh Fruits</h2>


<OwlCarousel className="owl-theme"  loop margin={10}  items={4} autoplay={true} autoplaySpeed={500} autoplayTimeout={1500} style={{fontSize:"40px" ,marginTop:"20px"}}>
        <div className="item">
          <img src={apple} /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Apple<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹500/kg</del><br></br>₹400/kg</span></h4>

        </div>
        <div className="item">
          <img src={banana} /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Banana<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹80</del><br></br>₹70</span></h4>

        </div>
        <div className="item">
          <img src={watermelon} /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Watermelon<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹100</del><br></br>₹80</span></h4>

        </div>
        <div className="item">
          <img src={pomegranate} /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Pomegranate<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹100/kg</del><br></br>₹80/kg</span></h4>

        </div>
        <div className="item">
          <img src={grapes} /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Grapes<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹60/kg</del><br></br>₹50/kg</span></h4>

        </div>
      </OwlCarousel>
      <div className="text-right">
      <NavLink to="/" id="navv" className="btn btn-primary product_button" style={{fontWeight:"bold",marginRight:"40px" ,marginBottom:"30px"}}>View All</NavLink>
      </div>
</div>
     );
    }
  };
    



export default Fruits_Home;