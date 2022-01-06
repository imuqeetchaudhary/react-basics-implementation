import React, { Component, createRef } from "react";
import FRInput from "./FRInput";

class FRParentinput extends Component {
  constructor(props) {
    super(props);

    this.inputRef = createRef();
  }

  handleClick = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <>
        <FRInput ref={this.inputRef} />
        <button type="text" onClick={this.handleClick}>
          Focus Input
        </button>
      </>
    );
  }
}

export default FRParentinput;
