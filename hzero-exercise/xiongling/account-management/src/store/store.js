/*
 * @Description: 
 * @Date: 2019-08-11 21:13:03
 * @Author: barret<ling.xiong@hand-china.com>
 * @Copyright: Copyright (c) 2019, Hand
 */
import { createStore, combineReducers } from 'redux';
import * as home from './home/reducer';
import * as users from './users/reducer';
// import thunk from 'react-thunk';

let rootReducer = combineReducers({ ...home, ...users });

// let store = createStore(
//   combineReducers({...home, ...users}),  
//   applyMiddleware(thunk)
// );
let store = createStore(rootReducer);

export default store;
