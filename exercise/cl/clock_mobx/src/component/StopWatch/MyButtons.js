import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class MyButtons extends Component {
  render() {
    return (
      <div className="two">
        <div className="left_a" id="left" onClick={this.props.mystore.leftAdd}>
          <div className="left_b">{this.props.mystore.leftstr}</div>
        </div>
        <div
          className="right_a"
          id="right"
          onClick={this.props.mystore.rightAdd}
        >
          <div className="right_b">{this.props.mystore.rightstr}</div>
        </div>
      </div>
    );
  }
}
export default MyButtons;
