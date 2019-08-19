import React from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from "react-router-dom";
import './App.css';

import rootReducer from './redux/reducers';
import IndexRoute from './container/route';

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