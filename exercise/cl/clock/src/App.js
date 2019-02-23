import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      left1:0
    };
  }

  leftAdd(){
      this.setState({left1:this.state.left1++});
      console.log(this.state.left1);
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
              00:00.34
            </span>
          </div>
          <div className="two">
            <div className="left_a" id="left" onClick = {this.leftAdd()} >
              <div className="left_b">
                复位
              </div>
            </div>
            <div className="right_a" id="right">
              <div className="right_b">
                {this.state.left1 === 0 ? "启动" : "结束" }
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
