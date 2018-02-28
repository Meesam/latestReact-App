import { compose , createStore, applyMiddleware, combineReducers } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]



// const composedEnhancers = compose(
//   applyMiddleware(...middleware),
//   ...enhancers
// )

// const store = createStore(
//   rootReducer,
//   initialState,
//   composedEnhancers
// )

// export default store

export default (() => {
  const store = createStore(createReducer(), composeWithDevTools(
    applyMiddleware(...middleware)
  ));
  store.async = {};
  return store;
})();

export function registerReducer(store, name, reducer) {
  debugger;
  store.async[name] = reducer;
  store.replaceReducer(createReducer(store.async));
};

function createReducer (reducers) {
  return combineReducers({
    /* Obs.:
     All non dynamic loaded reducers are declared directly here.
     If you don't have any, use the following "root" indentity reducer.
    */
    root: (state=null) => state,
    ...reducers
  });
}
