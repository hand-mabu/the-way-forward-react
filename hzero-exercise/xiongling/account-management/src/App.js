/*
 * @Description: 
 * @Date: 2019-08-13 21:46:23
 * @Author: barret<ling.xiong@hand-china.com>
 * @Copyright: Copyright (c) 2019, Hand
 */
import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createBrowserHistory } from "history";
import asyncComponent from "./utils/asyncComponent";

import store from './store/store';

const Main = asyncComponent(() => import("./layouts/LayoutApp"));
const Login = asyncComponent(() => import("./components/login/Login"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    return (
      <Provider store={store}>
        <HashRouter history={createBrowserHistory}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/" component={Main} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
