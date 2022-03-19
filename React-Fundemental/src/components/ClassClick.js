import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler() {
        console.log("Clicked the Btn")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Btn</button>
      </div>
    );
  }
}

export default ClassClick