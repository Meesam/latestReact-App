import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/home';
import Login from './components/login';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter , Route , BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <App /> , document.getElementById('root'))
registerServiceWorker();
