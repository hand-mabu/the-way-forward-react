import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ReactDom from 'react-dom';
import {
  Provider
} from "redux";

// 引入React-Router模块
// import store from "./store/store";

//引入自定义组件
import Login from "./components/Login/login";//登录页面
// import User from "./components/UserManager/"//用户列表
// import Menu from "./components/common/Menu"//侧边栏菜单
import Main from "./components/BasicModules/Index";//首页

import { LocaleProvider } from "antd";
import './main.css';


export default class App extends Component {
  render() {
    return (
      <LocaleProvider>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/" component={Main} />
          </Switch>
        </Router>
      </LocaleProvider>
    );
  }
};
