import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class MySeconds extends Component {
  render() {
    return (
      <div className="one">
        <span id="number">{this.props.timedif}</span>
      </div>
    );
  }
}
export default MySeconds;
