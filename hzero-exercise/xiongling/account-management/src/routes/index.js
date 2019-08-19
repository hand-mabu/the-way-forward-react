/*
 * @Description: 
 * @Date: 2019-08-11 22:06:53
 * @Author: barret<ling.xiong@hand-china.com>
 * @Copyright: Copyright (c) 2019, Hand
 */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent';

// 系统组件
const Users = asyncComponent(() => import("../components/users/Users"));
// 404页面
const NotFound = asyncComponent(() => import("../components/error/NotFound"));
// 首页
const Home = asyncComponent(() => import("../components/home/Home"));

export default class RouteConfig extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route path="/users" component={Users} />
          <Route exact path="/home"  component={Home} />
          <Route path="/not_found" component={NotFound} />
          <Route path={'*'} component={NotFound} />
          {/* <Redirect to="/" /> */}
        </Switch>
    );
  }
}
