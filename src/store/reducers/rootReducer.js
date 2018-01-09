import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import coctailBase from './coctailBase.js';
import lineReducer from './lineReducer.js';
import findedCoctails from './findedCoctails.js';
import postState from './postState.js';
import coctailFitching from './coctailFitching.js';

export default combineReducers({
  router: routerReducer,
  coctailBase,
  lineReducer,
  findedCoctails,
  postState,
  coctailFitching

})
