import React, { Component } from "react";

export class ClassClick extends Component {
  handleClick() {
    console.log("Clicked the button");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        {/* <button onClick={() => this.handleClick()}>Click Me</button> */}
      </div>
    );
  }
}
