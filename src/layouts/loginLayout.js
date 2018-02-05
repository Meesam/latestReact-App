import React, { Component } from 'react';
import Login from '../components/login';

export default class LoginLayout extends Component {
   render(){
    return (
        <div>
          {this.props.children}
        </div>
      )
   }
}