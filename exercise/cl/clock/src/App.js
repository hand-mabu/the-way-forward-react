import React, { Component } from "react";
import "./App.css";
import MyHeader from "./component/MyHeader";
import MyFoot from "./component/MyFoot";
class App extends Component {
  constructor() {
    super();
    this.state = {
      left1: 0,
      right1: 0,
      // 显示在页面的秒数
      timedif: "00:00.00",
      // 计次数组
      count: [],
      // innerHTML
      inner: []
    };
    // 开始时间
    this.starttime = "";
    this.leftAdd = this.leftAdd.bind(this);
    this.rightAdd = this.rightAdd.bind(this);
    this.calcTime = this.calcTime.bind(this);
    // 定时器
    this.timer = 1;
    this.printHtml = this.printHtml.bind(this);
  }

  leftAdd() {
    if (this.state.right1 % 2 == 0) {
      this.setState({ timedif: "00:00.00", count: [], inner: [] });
    } else {
      this.setState(
        { count: [...this.state.count, this.state.timedif] },
        () => {
          this.printHtml();
        }
      );
    }
  }
  calcTime() {
    var myDate1 = new Date();
    var tmp = myDate1.valueOf() - this.starttime;
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
    this.setState({ timedif: min + ":" + sec + "." + ms });
  }
  rightAdd() {
    if (this.state.right1 % 2 == 0) {
      // 获取开始时间
      var myDate2 = new Date();
      this.starttime = myDate2.valueOf();
      this.timer = window.setInterval(this.calcTime, 10);
      console.log("time:", this.timer);
    } else {
      window.clearInterval(this.timer);
    }
    this.setState({ right1: ++this.state.right1 });
  }
  printHtml() {
    console.log(this.state.count.length);
    for (var i = 0; i < this.state.count.length; i++) {
      console.log(i);
      this.setState({
        inner: [
          <li key={i} className="re_li">
            <span className="sp_text">计次{i + 1}</span>
            <span className="sp_time">{this.state.count[i]}</span>
          </li>,
          ...this.state.inner
        ]
      });
    }
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <MyHeader />
          <div className="top">
            <div className="one">
              <span id="number">{this.state.timedif}</span>
            </div>
            <div className="two">
              <div className="left_a" id="left" onClick={this.leftAdd}>
                <div className="left_b">
                  {this.state.right1 % 2 == 0 ? "复位" : "计次"}
                </div>
              </div>
              <div className="right_a" id="right" onClick={this.rightAdd}>
                <div className="right_b">
                  {this.state.right1 % 2 == 0 ? "启动" : "停止"}
                </div>
              </div>
            </div>
          </div>
          <div className="record">
            <ul id="ul">{this.state.inner}</ul>
          </div>
          <MyFoot />
        </div>
      </div>
    );
  }
}

export default App;
