import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/font-awesome/css/font-awesome.min.css';
import './vendor/datatables/dataTables.bootstrap4.css';
import './css/sb-admin.css';


ReactDOM.render(
  <App /> , document.getElementById('root'))
registerServiceWorker();
