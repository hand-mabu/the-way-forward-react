import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      left1:0,
      right1:0,
      // 显示秒表
      timedif:"00:00.0",
    };
    // 开始时间
    this.starttime = "";
    this.leftAdd = this.leftAdd.bind(this);
    this.rightAdd = this.rightAdd.bind(this);
    this.calcTime = this.calcTime.bind(this);
    // 定时器
    this.timer = 1;
  }

  leftAdd(){
    if (this.state.right1%2 == 0){
        this.setState({timedif:"00:00.00"});
    }
  }
  calcTime(){
    var myDate1 = new Date();
    var tmp = myDate1.valueOf()-this.starttime;
    var min = Math.floor(tmp/60000);
    if (min<10){min = "0"+min};
    var sec = Math.floor(tmp/1000);
    if (sec<10){sec = "0"+sec};
    var ms = Math.round((tmp%1000)/10)
    this.setState({timedif:min+":"+sec+"."+ms});
  }
  rightAdd(){

    if (this.state.right1%2 ==0){
      // 获取开始时间
      var myDate2 = new Date();
      this.starttime = myDate2.valueOf()
      this.timer = window.setInterval(this.calcTime,10)
      console.log("time:",this.timer);
    }else{
      window.clearInterval(this.timer);
    };
   this.setState({right1:++this.state.right1});
  }
  render() {

    return (
      <div className="App">
      <header>
        <span className="ss">
          秒&nbsp;&nbsp;&nbsp;&nbsp;表
        </span>
        </header>
        <div className="container">
        <div className="top">
          <div className="one">
            <span id="number">
              {this.state.timedif}
            </span>
          </div>
          <div className="two">
            <div className="left_a" id="left" onClick = {this.leftAdd}>
              <div className="left_b">
                {this.state.right1%2 == 0 ? "复位" : "计次" }
              </div>
            </div>
            <div className="right_a" id="right" onClick = {this.rightAdd}>
              <div className="right_b">
                {this.state.right1%2 == 0 ? "启动" : "停止" }
              </div>
            </div>
          </div>
        </div>
        <div className="record">
          <ul>
            <li className="re_li">
              <span className="sp_text">计次1</span>
              <span className="sp_time">00：11.01</span>
            </li>
            <li className="re_li">
              <span className="sp_text">计次1</span>
              <span className="sp_time">00：11.01</span>
            </li>
            <li className="re_li">
              <span className="sp_text">计次1</span>
              <span className="sp_time">00：11.01</span>
            </li>
            <li className="re_li">
              <span className="sp_text">计次1</span>
              <span className="sp_time">00：11.01</span>
            </li>
            <li className="re_li">
              <span className="sp_text">计次1</span>
              <span className="sp_time">00：11.01</span>
            </li>
            <li className="re_li">
              <span className="sp_text">计次1</span>
              <span className="sp_time">00：11.01</span>
            </li>
          </ul>
        </div>
        <div className="footer">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
