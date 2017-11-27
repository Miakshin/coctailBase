import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import coctailBase from './coctailBase.js'

export default combineReducers({
  router: routerReducer,
  coctailBase
})
