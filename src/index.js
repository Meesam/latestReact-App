import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
//import store, { history } from './store/store';
import initializeStore from "./store/store";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/font-awesome/css/font-awesome.min.css';
import './vendor/datatables/dataTables.bootstrap4.css';
import './css/sb-admin.css';

const store = initializeStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
