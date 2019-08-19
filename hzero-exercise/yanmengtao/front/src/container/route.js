import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from './layout';
import Login from '../page/Login';

function MyRoute() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route component={Layout}></Route>
    </Switch>
  )
}

export default MyRoute;