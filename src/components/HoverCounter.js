import React, { Component } from "react";
import withCounter from "./withCounterHOC";

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <>
        <h3 onMouseOver={incrementCount}>Hover {count} times</h3>
      </>
    );
  }
}

export default withCounter(HoverCounter, 5);
