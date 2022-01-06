import React, { Component } from "react";
import withCounter from "./withCounterHOC";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <>
        <button onClick={incrementCount}> {this.props.name} Clicked {count} Times</button>
      </>
    );
  }
}

export default withCounter(ClickCounter, 10);
