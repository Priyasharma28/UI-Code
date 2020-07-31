import React, { Component } from 'react';
import BannerSlider from "./BannerSlider";
import Categories from "./Categories";
import Mobile from "./Mobile";
import Fruits_Home from "./Fruits_Home";
import Vegetables_Home from "./Vegetables_Home";
import Patanjali_Home from "./Patanjali_Home";
import Computers_Home from "./Computers_Home";
import Groceries_Home from "./Groceries_Home";
import Footer_Home from "./Footer_Home";
import "../assets/css/main.css";

class HomeComponent extends Component {
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
                <BannerSlider />
                <Categories />
                <Mobile />
                <Fruits_Home/>
                <Vegetables_Home/>
                <Patanjali_Home/>
                <Computers_Home/>
                <Groceries_Home/>
                <Footer_Home/>
            </React.Fragment>
        )
    }
}

export default HomeComponent;
