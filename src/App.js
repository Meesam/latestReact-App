import React, { Component } from 'react';
import {Route,BrowserRouter as Router , Switch   } from "react-router-dom";
import {Provider} from 'react-redux'
import LoginLayout from './layouts/loginLayout';
import MainLayout from './layouts/mainLayout';
import WorkBenchLayout from './layouts/workBenchLayout';
import asyncComponent from './util/componentProvider';
//import store from './store/store';
//import module from './module';
//import basePath from './commonComponent/basepath';
// import Loadable from 'react-loadable';
//import Login from './components/login/login';
//import Dashboard from './components/dashboard/dashboard';
//import Home from './components/home/home';
//import WorkBench from './components/workbench/workbench';
import Loadable from 'react-loadable';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

const MyLoadingComponent = ({isLoading, error}) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
    return null;
  }
};

 const AsyncLogin = Loadable({
   loader: () => import("./components/login/login"),
   loading: MyLoadingComponent
   });

const AsyncDashboard = Loadable({
  loader: () => import("./components/dashboard/dashboard"),
  loading: MyLoadingComponent
});

const AsyncHome = Loadable({
  loader: () => import("./components/home/home"),
  loading: MyLoadingComponent
});

const AsyncWorkbench = Loadable({
  loader: () => import("./components/workbench/workbench"),
  loading: MyLoadingComponent
});

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <AppRoute exact path="/" layout={LoginLayout} component={AsyncLogin} />
          <AppRoute  path="/login" layout={LoginLayout} component={AsyncLogin} />
          <AppRoute  path="/dashboard" layout={MainLayout} component={AsyncDashboard} />
          <AppRoute  path="/home" layout={MainLayout} component={AsyncHome} />
          <AppRoute  path="/workbench/new" layout={WorkBenchLayout} component={AsyncWorkbench} />
        </Switch>
      </Router>
    );
  }
}

export default App;
