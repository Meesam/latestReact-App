import { createStore , applyMiddleware } from "redux";
import createReducer from "../reducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initializeStore = () => {
  const store = createStore(
    createReducer(),
    composeWithDevTools(
	    applyMiddleware(
	      thunk
	    )
	  )
  );

  // Create an object for any later reducers
  store.asyncReducers = {};
  store.injectReducer = (key, reducer) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(store.asyncReducers));
    return store;
  };
  return store;
};

export default initializeStore;
