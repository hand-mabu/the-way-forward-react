import { combineReducers } from 'redux';
import user from './user';
import accounts from './account';


export default combineReducers({
  user,
  accounts,
})