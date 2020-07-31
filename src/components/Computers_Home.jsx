import React,{Component} from 'react';
import harddrive from '../assets/images/harddrive.png';
import monitor from '../assets/images/monitor.jpg';
import mouse from '../assets/images/mouse.jpg';
import pendrive from '../assets/images/pendrive.jpg';
import keyboard from '../assets/images/keyboard.jpg';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {NavLink} from 'react-router-dom';
import "../assets/css/Common_style.css";



class Computers_Home extends Component {
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
<h2 className="text-center heading"  style={{fontWeight:"bold",backgroundColor:"rgb(237,210,163)"}}>Computers</h2>


<OwlCarousel className="owl-theme"  loop margin={10}  items={4} autoplay={true} autoplaySpeed={500} autoplayTimeout={1500} style={{fontSize:"40px" ,marginTop:"20px"}}>
        <div className="item">
          <img src={harddrive} /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">HardDrive<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹5,000</del><br></br>₹4,800</span></h4>

        </div>
        <div className="item">
          <img src={monitor} /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Monitor<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹15,000</del><br></br>₹13,300</span></h4>

        </div>
        <div className="item">
          <img src={mouse} /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Mouse<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹1,500</del><br></br>₹1,000</span></h4>

        </div>
        <div className="item">
          <img src={pendrive} /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Pendrive<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹900</del><br></br>₹800</span></h4>
          
        </div>
        <div className="item">
          <img src={keyboard} /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Keyboard<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹5,000</del><br></br>₹4,500</span></h4>
        </div>
      </OwlCarousel>
      <div className="text-right">
      <NavLink to="/" id="navv" className="btn btn-primary product_button" style={{fontWeight:"bold",marginRight:"40px",marginBottom:"30px"}}>View All</NavLink>
      </div>
</div>
      
      );
  }
}; 


export default Computers_Home;