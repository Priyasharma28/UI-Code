import React, { Component } from 'react';
import Card from './CardComponent.jsx';
import CardItems from './CardItems';
import "../assets/css/Common_style.css";

class Categories extends Component {
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
                <div className="div" style={{ padding:"10px"}}>
                    <h2 className="text-center heading"   style={{fontWeight:"bold",backgroundColor:"rgb(237,210,163)"}} >Categories</h2>
                </div>
                <div className="container-fluid mb-5">
                    <div className="row">

                        <div className="col-10 mx-auto">
                            <div className="row">
                                {CardItems.map((val, ind) => {
                                    return <Card
                                        key={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                        btn={val.btn}
                                        link={val.link}
                                    />
                                })}
                            </div>

                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
};

export default Categories;