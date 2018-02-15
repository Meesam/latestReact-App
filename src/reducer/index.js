import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import workbenchReducer from './workbenchReducer';

export default combineReducers({
  routing: routerReducer,
  workbenchReducer
})