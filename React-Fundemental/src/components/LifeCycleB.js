import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Hanan",
    };
    console.log("LifeCycleB Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleB shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("LifeCycleB getSnapshotBeforeUpdate");
    return null;
  }

  render() {
    console.log("LifeCycleB render");

    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
