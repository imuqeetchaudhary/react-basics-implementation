import React, { Component, createRef } from "react";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
    };

    this.inputRef = createRef();
  }

  static getDerivedStateFromProps(props, state) {
    // return { name: "Abdul" };
    return null;
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  //   Update lifecycle methods

  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate() {
    return this.state;
  }

  componentDidUpdate(prevState, prevProps, snapshot) {
    this.inputRef.current.focus();
    console.log("Props", prevProps);
    console.log("State", prevState);
    console.log("Snapshot", snapshot);
  }

  handleClick = () => {
    this.setState({
      name: `Name Changed`,
    });
  };

  render() {
    return (
      <div>
        <input ref={this.inputRef} />
        <h3>Lifecycle A {this.state.name}</h3>
        <button onClick={this.handleClick}>Change</button>
      </div>
    );
  }
}

LifecycleA.defaultProps = {
  name: "Default Props",
};

export default LifecycleA;
