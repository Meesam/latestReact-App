import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';
import {jQuery}  from 'jquery-easing';
import './vendor/bootstrap/css/bootstrap.min.css';
import './css/sb-admin.css';

ReactDOM.render(
  <App /> , document.getElementById('root'))
registerServiceWorker();
