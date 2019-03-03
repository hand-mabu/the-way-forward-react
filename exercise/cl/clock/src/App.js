import React, { Component } from "react";
import "./App.css";
import MyHeader from "./component/MyHeader";
import MyFoot from "./component/MyFoot";
import StopWatch from "./component/StopWatch/StopWatch";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <MyHeader />
          <StopWatch />
          <MyFoot />
        </div>
      </div>
    );
  }
}

export default App;
