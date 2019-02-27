import React, { Component } from "react";
import "./App.css";
import MyHeader from "./component/MyHeader";
import MyFoot from "./component/MyFoot";
import MySeconds from "./component/MySeconds";
import MyButtons from "./component/MyButtons";
import MyRecord from "./component/MyRecord";

class App extends Component {
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
      <div className="App">
        <div className="container">
          <MyHeader />
          <div className="top">
            <MySeconds timedif={this.state.timedif} />
            <MyButtons
              seconds={this.sendSecond.bind(this)}
              timedif={this.state.timedif}
              count={this.sendCount.bind(this)}
            />
          </div>
          <MyRecord count={this.state.count} />
          <MyFoot />
        </div>
      </div>
    );
  }
}

export default App;
