import React, { Component } from "react";

export default class MySeconds extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="one">
        <span id="number">{this.props.timedif}</span>
      </div>
    );
  }
}
