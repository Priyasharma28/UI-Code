import React,{Component} from 'react';

import "../assets/css/Footer_style.css";



class Footer_Home extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  };
	}
  
	componentDidMount() {
	}
  
  
	render() {
    return(


     <section id="footer">
		<div className="container">

				
				
				<div className="text-center">
					<h3>Shop Now</h3>
					<ul className="list-unstyled quick-links">
						<li><a href="https://www.nukkadwale.in"><i className="fa fa-angle-double-right"></i>Home</a></li>
						<li><a href="https://www.nukkadwale.in"><i className="fa fa-angle-double-right"></i>About</a></li>
						<li><a href="https://www.nukkadwale.in"><i className="fa fa-angle-double-right"></i>Contact Us</a></li>
	
					</ul>
				</div>
			
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a></li>
						
						<li className="list-inline-item"><a href="https://www.whatsapp.com"><i className="fa fa-whatsapp"></i></a></li>
						<li className="list-inline-item"><a href="https://www.gmail.com"><i className="fa fa-google"></i></a></li>
						<li className="list-inline-item"><a href="https://www.gmail.com" target="_blank"><i className="fa fa-envelope"></i></a></li>
					</ul>
				</div>
				<hr/>
			</div>	
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">

				<a className="text-green ml-2" href="https://www.nukkadwale.in" target="_blank">Nukkadwale.in</a><br></br>
                <hr className="hr"></hr><p className="h6">© All right Reversed.</p>
				</div>
				<hr/>
			</div>	
		</div>
	</section>

);
    }
  };


export default Footer_Home;