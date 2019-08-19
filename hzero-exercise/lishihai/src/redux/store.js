import reducers from './reducers';
import {createStore,applyMiddleware,compose} from 'redux';
import reduxThunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createHashHistory';
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

let history = createHistory();
export default createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk,routerMiddleware(history))));