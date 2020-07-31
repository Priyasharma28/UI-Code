import React,{Component} from 'react';
import fortune from '../assets/images/fortune.jpg';
import detergent from '../assets/images/detergent.jpg';
import soap from '../assets/images/soap.jpg';
import rice from '../assets/images/rice.jpg';
import shampoo from '../assets/images/shampoo.jpg';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {NavLink} from 'react-router-dom';
import "../assets/css/Common_style.css";


class Groceries_Home extends Component {
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
<h2 className="text-center heading"  style={{fontWeight:"bold",backgroundColor:"rgb(237,210,163)"}}>Groceries</h2>


<OwlCarousel className="owl-theme" loop margin={10}  items={4} autoplay={true} autoplaySpeed={500} autoplayTimeout={1500} style={{fontSize:"40px" ,marginTop:"20px"}}>
        <div className="item">
          <img src={fortune} /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Fortune<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹1,000</del><br></br>₹990</span></h4>

        </div>
        <div className="item">
          <img src={detergent} /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Detergent<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹180</del><br></br>₹170</span></h4>

        </div>
        <div className="item">
          <img src={soap} /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Soap<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹60</del><br></br>₹50</span></h4>

        </div>
        <div className="item">
          <img src={rice} />
          <h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Rice<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹1,500</del><br></br>₹1,400</span></h4>

        </div>
        <div className="item">
          <img src={shampoo} /><h4 align="center" style={{paddingTop:"5px",fontWeight:"bold"}} className="product_heading">Shampoo<br></br><span style={{color:"green"}} ><del  id="del" style={{color:"grey",fontSize:"13px"}}>₹450</del><br></br>₹400</span></h4>
        </div>
      </OwlCarousel>
      <div className="text-right">
      <NavLink to="/" id="navv" className="btn btn-primary product_button" style={{fontWeight:"bold",marginRight:"40px",marginBottom:"30px"}}>View All</NavLink>
      </div>
</div>
      

      );
    }
  };

export default Groceries_Home;