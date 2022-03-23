import React, { Component } from "react";
import Child from "../components/Child";
class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
  }

  greatParent = () => {
    alert(`Hello ${this.state.parentName}`);
  };
  render() {
    return <div>Hello </div>;
  }
}

export default Parent;
