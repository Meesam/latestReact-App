import React from 'react';
import ReactDOM from 'react-dom';
import './css/sb-admin.min.css';
import App from './App';
import Home from './components/home';
import Login from './components/login';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter , Route , BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
        <Route path='/' component={App}>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
        </Route>
   </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker();
