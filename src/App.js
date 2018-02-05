import React, { Component } from 'react';
import {Route,HashRouter as Router , Switch   } from "react-router-dom";
import Home from './components/home';
import Users from './components/Users';
import Login from './components/login';
import LoginLayout from './layouts/loginLayout';
import MainLayout from './layouts/mainLayout';

class App extends Component {
  render() {
    console.log('props are ', this.props);
    return (
      <Router>
       <div>
        <MainLayout>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/users" component={Users} />
          </MainLayout>
        <LoginLayout >
          <Route path="/login" component={Login} />
        </LoginLayout> 
       </div>
      </Router>
    );
  }
}

export default App;
