import React, { Component } from "react";

class FocusInput extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  focusInput() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <>
        <div>
          <label>Username: </label>
          <input type="text" ref={this.inputRef} />
        </div>
      </>
    );
  }
}

export default FocusInput;
