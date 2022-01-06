import React, { Component } from "react";
import Component3 from "./Component3";
import UserContext from "./userContext";

class Component2 extends Component {
  static contextType = UserContext;

  render() {
    return (
      <>
        <Component3 />
        <h1>Conponent 2 context = {this.context}</h1>
      </>
    );
  }
}

// Component2.contextType = UserContext;

export default Component2;
