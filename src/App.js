import React, { Component } from 'react';
import {Route,HashRouter} from "react-router-dom";
import Home from './components/home';
import Users from './components/Users';
import Login from './components/login';

class App extends Component {
  render() {
    return (
      <HashRouter>
       <div className="App">
        <Route exact path="/" component={Login}/>
        <Route path="/users" component={Users}/>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
       </div>
      </HashRouter>
    );
  }
}

export default App;
