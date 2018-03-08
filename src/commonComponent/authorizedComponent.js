import React,{Component} from 'react';

export default function Authorized(WrappedComponent) {
  return class extends Component {
     render() {
        
        this.props;
        return <WrappedComponent {...this.props} />;
     }
  };
}