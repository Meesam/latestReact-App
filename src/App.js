import React, { Component } from 'react';
import {Route,BrowserRouter as Router , Switch   } from "react-router-dom";
import {Provider} from 'react-redux'
import LoginLayout from './layouts/loginLayout';
import MainLayout from './layouts/mainLayout';
import WorkBenchLayout from './layouts/workBenchLayout';
import Home from './components/home';
import Login from './components/login';
import Dashboard from './components/dashboard';
import WorkBench from './components/workbench';
import AsyncComponent from './util/componentProvider';
import store from './store/store';
import module from './module';
import basePath from './commonComponent/basepath';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

const login = () => import(/* webpackChunkName: "login" */ './components/login');
const dashboard = () => import(/* webpackChunkName: "dashboard" */ './components/dashboard');
const workbench = () => import(/* webpackChunkName: "workbench" */ './components/workbench');
const home = () => import(/* webpackChunkName: "home" */ './components/home');

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <AppRoute exact path="/" layout={LoginLayout} component={ <AsyncComponent moduleProvider={login} />} />
          <AppRoute exact path="/login" layout={LoginLayout} component={() => <AsyncComponent moduleProvider={login} />} />
          <AppRoute exact path="/dashboard" layout={MainLayout} component={() => <AsyncComponent moduleProvider={dashboard} />} />
          <AppRoute exact path="home" layout={MainLayout} component={() => <AsyncComponent moduleProvider={home} />} />
          <AppRoute exact path="/workbench/new" layout={WorkBenchLayout} component={() => <AsyncComponent moduleProvider={workbench} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
