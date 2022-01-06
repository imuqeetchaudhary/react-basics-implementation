import React, { Component } from "react";

class Refsdemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

    // Callback ref

    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    // this.inputRef.current.focus()
    // console.log(this.inputRef);
    //
    // Callback ref
    if(this.cbRef) {
        this.cbRef.focus()
    }
  }

  render() {
    return (
      <>
        <div>
          <label>Username: </label>
          <input type="text" ref={this.inputRef} />
        </div>
        <div>
          <label>Email: </label>
          <input type="text" ref={this.setCbRef} />
        </div>
      </>
    );
  }
}

export default Refsdemo;
