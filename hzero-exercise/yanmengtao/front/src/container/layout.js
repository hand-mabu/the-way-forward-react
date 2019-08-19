import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";

import Index from '../page/Index';
import NotFount from '../page/NotFount';
import Crawler from '../page/crawler';


export default class Layout extends Component {
  render() {
    console.log('layout');
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Index</Link>
          </li>
          <li>
            <Link to="/crawler">Crawler</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to={`/404-${(Math.random() + '').slice(2)}`}>404</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/crawler" component={Crawler} />
          <Route component={NotFount} />
        </Switch>
      </div>
    );
  }
}