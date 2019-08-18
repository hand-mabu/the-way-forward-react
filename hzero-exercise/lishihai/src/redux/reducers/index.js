import user from './user';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
export default combineReducers({
  user,
  router:routerReducer
})