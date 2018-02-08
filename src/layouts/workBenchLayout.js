import React, { Component } from 'react';
import Header from '../commonComponent/header';

export default class WorkBenchLayout extends Component{
  render() {
    let userInfo={
      userInfo:{
        Eea:"117095414185065359488",
        Paa:"https://lh3.googleusercontent.com/-gXOdfIMXDH8/AAAAAAAAAAI/AAAAAAAAASc/ege1HZR8W6E/s96-c/photo.jpg",
        U3:"meesam.engineer@gmail.com",
        ig:"Meesam Zaidi",
        ofa:"Meesam",
        wea:"Zaidi"
      }
    }
    return(     
      <div className="fixed-nav sticky-footer bg-dark" id="page-top">
        <Header userInfo={userInfo} />
          <div className="content-wrapper">
            <div className="container-fluid">
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