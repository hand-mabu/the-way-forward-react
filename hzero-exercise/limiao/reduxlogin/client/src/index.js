import React from 'react';
import ReactDOM from 'react-dom';

import NavigationBar from './components/NavigationBar';
import FlashMessagesList from './components/flash/FlashMessagesList';
import * as serviceWorker from './serviceWorker';

import logger from 'redux-logger';
import {composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';

import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk,logger)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Router routes={ routes }>
      <div>
        <NavigationBar />
        <FlashMessagesList />
        { routes }
      </div>
    </Router>
    </Provider>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
