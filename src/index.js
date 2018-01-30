import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/home';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter , Route } from 'react-router-dom';
 
ReactDOM.render((
   <HashRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/home" component={Home} />
      </div>
   </HashRouter >
), document.getElementById( 'root' ) )
registerServiceWorker();
