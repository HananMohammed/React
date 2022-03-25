import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Hanan",
    };
    console.log("LifeCycleA Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }

  changeState = () => {
    this.setState({
      name: "Hanan updates",
    });
  };
  render() {
    console.log("LifeCycleA render");

    return (
      <div>
        <div>LifeCycleA</div>
        <LifeCycleB />
        <button onClick={this.changeState}>Change State</button>
      </div>
    );
  }
}

export default LifeCycleA;
