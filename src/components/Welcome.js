import React, { Component } from "react";

export class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>
          Hello, {this.props.firstName} {this.props.lastName}{" "}
          {this.props.fatherName}
        </h1>
        {this.props.children}
      </div>
    );
  }
}
