import React,{Component} from 'react';
import patanjali_aloevera from '../assets/images/patanjali_aloevera.jpg';
import amla_juice from '../assets/images/amla_juice.jpg';
import patanjali_honey from '../assets/images/patanjali_honey.jpg';
import patanjali_anardana from '../assets/images/patanjali_anardana.jpg';
import Patanjali_oil  from '../assets/images/Patanjali_oil.jpg';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {NavLink} from 'react-router-dom';
import "../assets/css/Common_style.css";




class Patanjali_Home extends Component {
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
<h2 className="text-center heading"  style={{fontWeight:"bold",backgroundColor:"rgb(237,210,163)"}}>Patanjali</h2>


<OwlCarousel className="owl-theme"  loop margin={10}  items={4} autoplay={true} autoplaySpeed={500} autoplayTimeout={1500} style={{fontSize:"40px" ,marginTop:"20px"}}>
        <div className="item">
          <img src={patanjali_aloevera} /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Aloevera<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹120</del><br></br>₹100</span></h4>

        </div>
        <div className="item">
          <img src={Patanjali_oil} /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Oil<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹100</del><br></br>₹90</span></h4>

        </div>
        <div className="item">
          <img src={patanjali_anardana} /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Anardana<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹50</del><br></br>₹40</span></h4>

        </div>
        <div className="item">
          <img src={patanjali_honey} /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Honey<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹120</del><br></br>₹100</span></h4>

        </div>
        <div className="item">
          <img src={amla_juice} /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Juice<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹200</del><br></br>₹180</span></h4>

        </div>
      </OwlCarousel>
      <div className="text-right">
      <NavLink to="/" id="navv" className="btn btn-primary product_button" style={{fontWeight:"bold",marginRight:"40px",marginBottom:"30px"}}>View All</NavLink>
      </div>
</div>
   );
  }
};    


export default Patanjali_Home;