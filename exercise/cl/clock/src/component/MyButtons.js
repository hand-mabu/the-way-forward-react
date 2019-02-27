import React, { Component } from "react";

export default class MyButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 左按钮点击的次数
      left1: 0,
      // 右按钮点击的次数
      right1: 0
    };
    // 开始时间
    this.starttime = "00:00.00";
    // 定时器
    this.timer = 1;
    this.timebefore = 0;
  }
  // 点击左边按钮触发事件
  leftAdd() {
    if (this.state.right1 % 2 == 0) {
      this.props.seconds("00:00.00");
      this.props.count("null");
      this.timebefore = 0;
      this.starttime = 0;
    } else {
      this.props.count(this.props.timedif);
    }
  }
  // 点击右边按钮触发事件
  rightAdd() {
    if (this.state.right1 % 2 == 0) {
      // 获取开始时间
      var myDate2 = new Date();
      this.starttime = myDate2.valueOf();
      this.timer = window.setInterval(this.calcTime.bind(this), 10);
    } else {
      window.clearInterval(this.timer);
    }
    // 获取未清零情况下的秒数
    var myDate1 = new Date();
    this.timebefore = myDate1.valueOf() - this.starttime + this.timebefore;
    console.log(this.timebefore);
    this.setState({ right1: ++this.state.right1 });
  }
  calcTime() {
    var myDate1 = new Date();
    var tmp = myDate1.valueOf() - this.starttime + this.timebefore;
    var min = Math.floor(tmp / 60000);
    if (min < 10) {
      min = "0" + min;
    }
    var sec = Math.floor(tmp / 1000);
    if (sec < 10) {
      sec = "0" + sec;
    }
    var ms = Math.round((tmp % 1000) / 10);
    if (ms == 0) {
      ms = "00";
    } else if (ms < 10) {
      ms = "0" + ms;
    }
    this.props.seconds(min + ":" + sec + "." + ms);
  }
  render() {
    return (
      <div className="two">
        <div className="left_a" id="left" onClick={this.leftAdd.bind(this)}>
          <div className="left_b">
            {this.state.right1 % 2 == 0 ? "复位" : "计次"}
          </div>
        </div>
        <div className="right_a" id="right" onClick={this.rightAdd.bind(this)}>
          <div className="right_b">
            {this.state.right1 % 2 == 0 ? "启动" : "停止"}
          </div>
        </div>
      </div>
    );
  }
}
