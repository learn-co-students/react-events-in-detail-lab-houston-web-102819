import React from "react";

export default class CoordinatesButton extends React.Component{
    handleEvent = event => this.props.onReceiveCoordinates([event.clientX, event.clientY])
    render(){
        return(
            <button onClick={this.handleEvent}></button>
        )
    }
}