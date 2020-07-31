import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import cart from '../assets/images/cart.png'

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <a className="navbar-brand mx-auto" style={{ color: "Red", fontFamily: "'Josefin Sans', sans-serif" }}>Nukkadwale
                    <img src={cart} className="img-fluid ml-auto" style={{ height: "30px", width: "50px" }} ></img></a>
                    <div className="form-row container" style={{ justifyContent: "center", alignItems: "center" }}>
                        <div className="col-xl-6 input-group">
                        <button className="navbar-toggler ml-auto pull-left" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>&nbsp;&nbsp;
                            <input className="form-control" type="search" placeholder="Search here...." aria-label="Search" />&nbsp;
                             <span className="input-group-btn">
                                <button className="btn btn-outline-danger ml-sm-2" type="submit">Search</button>&nbsp;
                                   </span>

                        </div>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" style={{ color: "red" }} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Product
                    </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="dropdown-divider" style={{ border: "2px solid red" }}></div>
                                    <a className="dropdown-item" >Home</a>
                                    <a className="dropdown-item" >About</a>
                                    <a className="dropdown-item" >Cotact Us</a>
                                    <a className="dropdown-item" >Mobiles</a>
                                    <a className="dropdown-item" >Fruits</a>
                                    <a className="dropdown-item" >Vegetables</a>
                                    <a className="dropdown-item" >Patanjali</a>
                                    <a className="dropdown-item" >Computers</a>
                                    <a className="dropdown-item">Groceries</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" style={{ color: "red" }} activeClassName='menu_active' to="/Login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" style={{ color: "red" }} activeClassName='menu_active' to="/Signup">Signup <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" style={{ color: "red" }} activeClassName='menu_active' to="/Cart">Cart <span className="sr-only">(current)</span></NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
};

export default NavbarComponent;