import React from "react";
import App from "../../App";

export default class title extends React.Component{


    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
            </div>
        );
    }
}
