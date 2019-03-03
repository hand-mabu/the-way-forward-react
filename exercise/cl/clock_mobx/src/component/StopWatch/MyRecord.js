import React, { Component } from "react";
import { observer } from "mobx-react";
@observer
class MyRecord extends Component {
  render() {
    return (
      <div className="record">
        <ul id="ul">
          {this.props.count.map(function(item, index) {
            return (
              <li className="re_li">
                <span className="sp_text">计次{index + 1}</span>
                <span className="sp_time">{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default MyRecord;
