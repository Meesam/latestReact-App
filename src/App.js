import React, { Component } from 'react';
import {Route,BrowserRouter as Router , Switch   } from "react-router-dom";
import LoginLayout from './layouts/loginLayout';
import MainLayout from './layouts/mainLayout';
import WorkBenchLayout from './layouts/workBenchLayout';
import Home from './components/home';
import Login from './components/login';
import Dashboard from './components/dashboard';
import WorkBench from './components/workbench';


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
          <AppRoute exact path="/" layout={LoginLayout} component={Login} />
          <AppRoute exact path="/login" layout={LoginLayout} component={Login} />
          <AppRoute exact path="/dashboard" layout={MainLayout} component={Dashboard} />
          <AppRoute exact path="/home" layout={MainLayout} component={Home} />
          <AppRoute exact path="/workbench/new" layout={WorkBenchLayout} component={WorkBench} />
        </Switch>
      </Router>
    );
  }
}

export default App;
