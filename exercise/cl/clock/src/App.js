import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      flag1:0
    }
  }

  // var myright = document.getElementById("right");

  render() {
    this.ref.left.onclick=() => {
       this.setState({flag1:++this.state.flag1});
     }
    return (
      <div className="App">
      <header>
        <span class="ss">
          秒&nbsp;&nbsp;&nbsp;&nbsp;表
        </span>
        </header>
        <div class="container">
        <div class="top">
          <div class="one">
            <span id="number">
              00:00.34
            </span>
          </div>
          <div class="two">
            <div class="left_a" ref="left">
              <div class="left_b">
                复位
              </div>
            </div>
            <div class="right_a" ref="right">
              <div class="right_b">
                {this.flag1 === 0 ? "启动" : "结束" }
              </div>
            </div>
          </div>
        </div>
        <div class="record">
          <ul>
            <li class="re_li">
              <span class="sp_text">计次1</span>
              <span class="sp_time">00：11.01</span>
            </li>
            <li class="re_li">
              <span class="sp_text">计次1</span>
              <span class="sp_time">00：11.01</span>
            </li>
            <li class="re_li">
              <span class="sp_text">计次1</span>
              <span class="sp_time">00：11.01</span>
            </li>
            <li class="re_li">
              <span class="sp_text">计次1</span>
              <span class="sp_time">00：11.01</span>
            </li>
            <li class="re_li">
              <span class="sp_text">计次1</span>
              <span class="sp_time">00：11.01</span>
            </li>
            <li class="re_li">
              <span class="sp_text">计次1</span>
              <span class="sp_time">00：11.01</span>
            </li>
          </ul>
        </div>
        <div class="footer">
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
