import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    /*
    The constructor() is a method that's automatically called during the creation of a component.
    */
    super(props);

    this.state = {
      name: `Abdul Muqeet Arshad`,
    };

    console.log(`LifecycleB constructor`);
  }

  static getDerivedStateFromProps(props, state) {
    /*
    getDerivedStateFromProps(props, state) is a static method that is called just before render()
    method in both mounting and updating phase in React. It takes updated props and the current
    state as arguments. We have to return an object to update state or null to indicate that
    nothing has changed.
    */
    console.log(`LifecycleB getDerivedStateFromProps`);
    return null;
  }

  componentDidMount() {
    /*
    The componentDidMount() method allows us to execute the React code when the component is
    already placed in the DOM (Document Object Model). This method is called during the Mounting
    phase of the React Life-cycle i.e after the component is rendered.
    */
    console.log(`LifecycleB componentDidMount`);
  }

  //   Update lifecycle methods

  shouldComponentUpdate() {
    /*
    The shouldComponentUpdate() method allows us to exit the complex react update life cycle to
    avoid calling it again and again on every re-render. It only updates the component if the
    props passed to it changes.
    */
    console.log(`LifecycleB shouldComponentUpdate`);
    return true;
  }

  getSnapshotBeforeUpdate() {
    /*
    The getSnapshotBeforeUpdate() method is invoked just before the DOM is being rendered. It is
    used to store the previous values of the state after the DOM is updated. Any value returned by
    getSnapshotBeforeUpdate() method will be used as a parameter for componentDidUpdate() method.
    */
    console.log(`LifecycleB getSnapshotBeforeUpdate`);
    return null;
  }

  componentDidUpdate() {
    /*
    The componentDidUpdate() method allows us to execute the React code when the component is
    updated. All the network requests that are to be made when the props passed to the component
    changes are coded here.
    */
    console.log(`LifecycleB componentDidUpdate`);
  }

  render() {
    console.log(`LifecycleB render`);

    return (
      <div>
        <h3>Lifecycle B</h3>
      </div>
    );
  }
}

export default LifecycleB;
