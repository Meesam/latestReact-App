import React,{Component} from 'react';
import { Redirect } from 'react-router-dom'; 
import { withRouter } from 'react-router'

class GoogleAuth extends Component {
    componentWillMount(){
      let d=this.props;
         setTimeout(() => {(window).gapi.signin2.render('my-signin2', {
            'scope': 'profile email',
            'width': 240,
            'height': 50,
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': (data) => { this.onSuccess(data); },
            'onfailure': this.onFailure
          })}, 1000);
    }

    onSuccess(data){
      let profileInfo =data.getBasicProfile();     
      console.log('google sign in ', profileInfo);
      this.props.history.push('/dashboard');
    }

    onFailure(){
     console.log('google sign in error ');
    }
    
    render(){
      
      const { match, location, history } = this.props      
      return(
        <div id="my-signin2" data-onsuccess="onSignIn"></div>
      )
    }
}

export default GoogleAuth;