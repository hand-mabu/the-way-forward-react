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
import Route from './routes/';
import './assets/css/index.css';
import { Provider } from 'react-redux';
import store from './store/store';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const app = document.getElementById('root');

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    app
  )
}

render(Route);

if (module.hot) {
  module.hot.accept('./routes/', () => {
    render(Route);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
