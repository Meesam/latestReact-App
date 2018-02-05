import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';
import {jQuery}  from 'jquery-easing'
import './css/sb-admin.css';

console.log('easing ' , jQuery );

ReactDOM.render(
  <App /> , document.getElementById('root'))
registerServiceWorker();
