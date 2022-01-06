import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementBy1() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log(this.state.count);
    //   }
    // );
    // console.log(this.state.count);

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    // console.log(this.state.count);
  }

  incrementBy5() {
    this.incrementBy1();
    this.incrementBy1();
    this.incrementBy1();
    this.incrementBy1();
    this.incrementBy1();
  }

  render() {
    return (
      <div>
        <h1>Counter = {this.state.count}</h1>
        <button onClick={() => this.incrementBy5()}>Increment</button>
      </div>
    );
  }
}
