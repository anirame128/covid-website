import React, { Component } from 'react';
import "./Image.css";

class Image extends Component {
    render() {
        return (
            <div className="size-image">
            <img src="5 steps Covid-19.jpg" alt="Card image cap" style={{position:"absolute",width:"300px",height:"350px", left:"500px"}}></img>
            </div>
        );
    }
}

export default Image;