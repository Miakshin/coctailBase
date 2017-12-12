import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import coctailBase from './coctailBase.js';
import lineReducer from './lineReducer.js';
import searchFilter from './searchFilter.js';

export default combineReducers({
  router: routerReducer,
  coctailBase,
  lineReducer,
  searchFilter
})
