import React from 'react';
import ReactDOM from 'react-dom';

// 引入路由组件
import {HashRouter,Route,Switch} from 'react-router-dom';
// 引入react-redux 状态管理组件
import {Provider} from 'react-redux';

import Home from "./containers/Home/home";

import Info from "./containers/Info/info";
import Login from "./containers/Login/login";
import Register from "./containers/Register/register";
import Eric from "./containers/Info/ericlsh";

import store from './redux/store';

window._store = store;

ReactDOM.render(
<Provider store={store}>
  <HashRouter>
      <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route path={'/info'} component={Info}/>
        <Route path={'/register'} component={Register}/>
        <Route path={'/login'} component={Login}/>
		<Route path={'/eric'} component={Eric}/>
      </Switch>
  </HashRouter>
</Provider>
,document.getElementById('root'));

// eric();