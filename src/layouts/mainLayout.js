import React, { Component } from 'react';
import Header from '../commonComponent/header';

export default class MainLayout extends Component{
  render() {
    debugger;
    console.log('props on mainLayout ', this.props.children.props.location.state);
    let userInfo=this.props.children.props.location.state;
    return(     
      <div className="fixed-nav sticky-footer bg-dark" id="page-top">
        <Header userInfo={userInfo} />
          <div className="content-wrapper">
            <div className="container-fluid">
            <ol className="breadcrumb">
            <li className="breadcrumb-item">
            <a href="#">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">My Dashboard</li>
            </ol>
                {this.props.children}
            </div>
            </div>
            <footer className="sticky-footer">
                <div className="container">
                    <div className="text-center">
                    <small>Copyright © KJON 2018</small>
                    </div>
                </div>
            </footer>
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fa fa-angle-up"></i>
            </a>
          </div>
    )
  }
}