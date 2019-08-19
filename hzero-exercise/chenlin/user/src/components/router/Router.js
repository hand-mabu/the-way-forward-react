import React from "react";
import { Switch, Route } from "react-router-dom";
import home from '../home/home';
import Login from '../login/login';

function RouteMenu() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route component={home}></Route>
    </Switch>
  )
}

export default RouteMenu;