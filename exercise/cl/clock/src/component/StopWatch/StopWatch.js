import React, { Component } from "react";
import MySeconds from "./MySeconds";
import MyButtons from "./MyButtons";
import MyRecord from "./MyRecord";

export default class StopWatch extends Component {
  constructor() {
    super();
    this.state = {
      // 显示在页面的秒数
      timedif: "00:00.00",
      // 计次数组
      count: []
    };
  }
  sendSecond(timedif) {
    this.setState({ timedif: timedif });
  }
  sendCount(count) {
    console.log("sendCount");
    if (count == "null") {
      this.setState({ count: [] });
    } else {
      this.setState({ count: [...this.state.count, count] });
    }
  }

  render() {
    return (
      <div>
        <div className="top">
          <MySeconds timedif={this.state.timedif} />
          <MyButtons
            seconds={this.sendSecond.bind(this)}
            timedif={this.state.timedif}
            count={this.sendCount.bind(this)}
          />
        </div>
        <MyRecord count={this.state.count} />
      </div>
    );
  }
}
