import React, { PureComponent } from "react";
import MemoComp from "./MemoComp";

class PureComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: `Abdul Muqeet Arshad`,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: `Abdul Muqeet Arshad`,
      });
    }, 2000);
  }

  render() {
    console.log(`Pure Component`);
    return <MemoComp name={this.state.name} />
  }
}

export default PureComp;
