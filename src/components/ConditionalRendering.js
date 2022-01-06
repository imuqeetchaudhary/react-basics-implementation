import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    //   Short Circuit Operator
    // return this.state.isLoggedIn && <div>Hello Abdul Muqeet Arshad.</div>;

    //   Conditional Ternery Operator
    return this.state.isLoggedIn ? (
      <div>Hello Abdul Muqeet Arshad.</div>
    ) : (
      <div>Hello Guest</div>
    );

    // Element Variables
    // let message;
    // if (this.state.isLoggedIn) message = <div>Hello Abdul Muqeet Arshad.</div>;
    // else message = <div>Hello Guest</div>;
    // return message;

    // If-else rendering
    // if (this.state.isLoggedIn) {
    //   return <div>Hello Abdul Muqeet Arshad.</div>;
    // } else {
    //   return <div>Hello Guest</div>;
    // }
  }
}

export default ConditionalRendering;
