/*
 * @Description: 
 * @Date: 2019-08-13 21:46:23
 * @Author: barret<ling.xiong@hand-china.com>
 * @Copyright: Copyright (c) 2019, Hand
 */
import React from 'react';
import ReactDOM from "react-dom";
// import ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";
import './assets/css/index.css';
import App from './App';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const app = document.getElementById('root');

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    app
  )
}

render(App);

// 热加载
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
