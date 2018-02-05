import React, { Component } from 'react';

export default class MainLayout extends Component{
    render() {
        return(
            <div id='maindiv'>
              <div id='header'>this is header</div>
              <div id='content'>
                {this.props.children}
              </div>
              <div id='footer'>this is footer</div>
            </div>
        )
    }
}