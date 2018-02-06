import React, { Component } from 'react';
import {Route,HashRouter as Router , Switch   } from "react-router-dom";
import Home from './components/home';
import Users from './components/Users';
import Login from './components/login';
import LoginLayout from './layouts/loginLayout';
import MainLayout from './layouts/mainLayout';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <AppRoute exact path="/" layout={MainLayout} component={Home} />
          <AppRoute exact path="/home" layout={MainLayout} component={Home} />
          <AppRoute exact path="/users" layout={MainLayout} component={Users} />
          <AppRoute exact path="/login" layout={LoginLayout} component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
