import React,{Component} from 'react';
import potato from '../assets/images/potato.png';
import cucumber from '../assets/images/cucumber.png';
import tomato from '../assets/images/tomato.png';
import brinjal from '../assets/images/brinjal.jpg';
import capsicum from '../assets/images/capsicum.jpg';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {NavLink} from 'react-router-dom';
import "../assets/css/Common_style.css";




class Vegetables_Home extends Component {
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
<h2 className="text-center heading"  style={{fontWeight:"bold",backgroundColor:"rgb(237,210,163)"}}>Fresh Vegetables</h2>


<OwlCarousel className="owl-theme"  loop margin={10}  items={4} autoplay={true} autoplaySpeed={500} autoplayTimeout={1500} style={{fontSize:"40px" ,marginTop:"20px"}}>
        <div className="item">
          <img src={potato} /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Potato<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹80/kg</del><br></br>₹70/kg</span></h4>

        </div>
        <div className="item">
          <img src={cucumber} /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Cucumber<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹70/kg</del><br></br>₹60/kg</span></h4>

        </div>
        <div className="item">
          <img src={tomato} /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Tomato<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹50/kg</del><br></br>₹40/kg</span></h4>

        </div>
        <div className="item">
          <img src={brinjal} />
          <h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Brinjal<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹30/kg</del><br></br>₹25/kg</span></h4>

        </div>
        <div className="item">
          <img src={capsicum} /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Capsicum<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹40/kg</del><br></br>₹30/kg</span></h4>

        </div>
      </OwlCarousel>
      <div className="text-right">
      <NavLink to="/" id="navv"  className="btn btn-primary product_button" style={{fontWeight:"bold",marginRight:"40px",marginBottom:"30px"}}>View All</NavLink>
      </div>
</div>
      

      );
    }
  };

export default Vegetables_Home;