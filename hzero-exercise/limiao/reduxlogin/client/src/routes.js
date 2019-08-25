import React from 'react';

import { Route } from 'react-router-dom';

import App from './components/App';

import LoginPage from './components/login/LoginPage';

import AuthRouter from './components/AuthRouter';

import LoginOut from './components/loginout/LoginOutPage';
export default (
  <div className="container">
    <Route exact path="/" component={ App } />
    <Route path="/login" component={ LoginPage } />
    <Route path="/loginout" component={ LoginOut } />
    <AuthRouter path='/' component={App}></AuthRouter>
  </div>
)