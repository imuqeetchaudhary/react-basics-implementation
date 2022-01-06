import React, { Component } from "react";
import Childcomponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    alert(`Hello ${this.state.message} from ${childName}!`);
  }

  render() {
    return (
      <div>
        <Childcomponent handleClick={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
