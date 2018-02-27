import React, { PureComponent } from 'react';
import LoadingIndicator from '../commonComponent/loaderComponent';

export default class AsyncComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      Component: null
    }
  }

  componentWillMount() {
    if(!this.state.Component) {
      this.props.moduleProvider().then( ({Component}) => this.setState({ Component }));
    }
  }

  render() {
    debugger;
    const { Component } = this.state;
    let d= this.props;
    console.log('Component ' , Component);
    return (
      <div>
        {Component ? <Component {...this.state} /> : <LoadingIndicator />}
      </div>
    );
  }
};