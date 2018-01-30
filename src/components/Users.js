import React,{Component} from 'react';

class Users extends Component {
    
    componentWillMount(){
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
     debugger;
      console.log('data ', data);
      let profileInfo =data.getBasicProfile();     
      console.log('google sign in ', profileInfo);

    }

    onFailure(){
     console.log('google sign in error ');
    }
    
    render(){
      return(
        <div id="my-signin2" data-onsuccess="onSignIn"></div>
      )
    }
}

export default Users;