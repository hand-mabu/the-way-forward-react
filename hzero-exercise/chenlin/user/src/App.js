import React, { Component } from 'react';
// import {BrowserRouter as Router, Route } from 'react-router-dom';
// import home from './components/home/home';
// import login from './components/login/login';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from "react-router-dom";

import rootReducer from './reducers/auth';
import IndexRoute from './components/router/Router';
const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <IndexRoute />
      </BrowserRouter>
    </Provider>

  );
}
export default App;
