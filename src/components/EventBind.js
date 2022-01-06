import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // we need to bind this to method if we use regular functions as constructor method
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      message: "Goodbye",
    });
  }

  //   handleClick = () => {
  //     this.setState({
  //       message: "Goodbye",
  //     });
  //   };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
