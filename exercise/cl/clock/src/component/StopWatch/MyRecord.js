import React, { Component } from "react";

export default class MyRecord extends Component {
  constructor(props) {
    super(props);
  }
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
