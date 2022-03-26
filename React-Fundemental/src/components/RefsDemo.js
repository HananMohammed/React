import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null
  }
  setCbRef = (element) => {
    this.cbRef = element
  }
  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);

    if (this.cbRef) {
      this.cbRef.focus()
    }
  }
  clickHandler = (e) => {
    e.preventDefault();
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" placeholder="USername" ref={this.inputRef} />
        <input type="text" placeholder="USername2222" ref={this.setCbRef} />
        <input type="submit" value="Submit" onClick={this.clickHandler} />
      </div>
    );
  }
}

export default RefsDemo;
