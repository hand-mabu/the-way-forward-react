/*
 * @Description: 
 * @Date: 2019-08-11 22:06:53
 * @Author: barret<ling.xiong@hand-china.com>
 * @Copyright: Copyright (c) 2019, Hand
 */
import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent';

const Login = asyncComponent(() => import("../components/login/Login"));
const Home = asyncComponent(() => import("../layouts/LayoutApp"));

export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    );
  }
}
