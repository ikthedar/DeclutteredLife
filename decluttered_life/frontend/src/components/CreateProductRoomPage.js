import React, { Component } from "react";

export default class CreateProductRoomPage extends Component {
    constructor(props){ // make a constructore, it will take props
        super(props);
    }

    render() {
        return <p>Welcome to DeclutteredLife Create Product Room Page </p>;
        //return <h1>{this.props.name}</h1>; if we used props
    }

}