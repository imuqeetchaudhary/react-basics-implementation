import React, { Component } from "react";
import FocusInput from "./FocusInput";

class Input extends Component {
  constructor(props) {
    super(props);

    this.componentRef = React.createRef();
  }

  handleClick = () => {
    this.componentRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <FocusInput ref={this.componentRef} />
        <button onClick={this.handleClick}>Focus Input</button>
      </div>
    );
  }
}

export default Input;
