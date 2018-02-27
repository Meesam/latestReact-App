import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import workbenchReducer from './workbenchReducer';
import elementReducer from './elementReducer';

// export default combineReducers({
//   routing: routerReducer,
//   workbenchReducer,
//   elementReducer
// })

export const reducer = {routerReducer,workbenchReducer,elementReducer };