import React, { Component } from "react";
import ProductRoomJoinPage from "./ProductRoomJoinPage";
import CreateProductRoomPage from "./CreateProductRoomPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";

export default class Homepage extends Component {
    constructor(props){ // make a constructore, it will take props
        super(props);
    }

    render() {
        return (
          <Router>
            <Switch>
              <Route exact path="/">
                <p>This is the home page</p>
              </Route>
              <Route path="/join" component={ProductRoomJoinPage} />
              <Route path="/create" component={CreateProductRoomPage} />
            </Switch>
          </Router>
        );
      }

}