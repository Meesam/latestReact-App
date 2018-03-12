import React, { Component } from 'react';
import {Route,BrowserRouter as Router , Switch   } from "react-router-dom";
import {Provider} from 'react-redux'
import LoginLayout from './layouts/loginLayout';
import MainLayout from './layouts/mainLayout';
import WorkBenchLayout from './layouts/workBenchLayout';
import Authorized from './commonComponent/authorizedComponent';
import Loadable from 'react-loadable';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

const LoaderComponent = ({isLoading, error}) => {
  if (isLoading) {
    return <div className="loading">Loading&#8230;</div>;
  }
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
    return null;
  }
};

 const AsyncLogin = Loadable({
   loader: () => import(/* webpackChunkName: "Login" */ "./components/login/login"),
   loading: LoaderComponent
 });

const AsyncDashboard = Loadable({
  loader: () => import(/* webpackChunkName: "Dashboard" */ "./components/dashboard/dashboard"),
  loading: LoaderComponent
});

const AsyncHome = Loadable({
  loader: () => import(/* webpackChunkName: "Home" */ "./components/home/home"),
  loading: LoaderComponent
});

const AsyncWorkbench = Loadable({
  loader: () => import(/* webpackChunkName: "Workbench" */ "./components/workbench/workbench"),
  loading: LoaderComponent
});

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <AppRoute exact path="/" layout={LoginLayout} component={Authorized(AsyncLogin)} />
          <AppRoute  path="/login" layout={LoginLayout} component={Authorized(AsyncLogin)} />
          <AppRoute  path="/dashboard" layout={MainLayout} component={Authorized(AsyncDashboard)} />
          <AppRoute  path="/home" layout={MainLayout} component={Authorized(AsyncHome)} />
          <AppRoute  path="/workbench/new" layout={WorkBenchLayout} component={Authorized(AsyncWorkbench)} />
        </Switch>
      </Router>
    );
  }
}

export default App;
