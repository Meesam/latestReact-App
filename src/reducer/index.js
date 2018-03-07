import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

 const createReducer = asyncReducers =>
  combineReducers({
    routing: routerReducer,
    // When reducers are provided to createReducer they'll be plopped on here
    ...asyncReducers
  });

export default createReducer;
