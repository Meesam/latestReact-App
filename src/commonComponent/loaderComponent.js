import React ,{Component} from 'react';

//  const  LoaderComponent = ({props}) => {
//    debugger;
//    let {isLoading,error}=props;
//     if (isLoading) {
//         return <div>Loading...</div>;
//     }
//     else if (error) {
//         return <div>Sorry, there was a problem loading the page.</div>;
//     }
//     else {
//         return null;
//     }

// }

class LoaderComponent extends Component {

    renderLoader(isLoading,error){ 
      let element;
        if (isLoading) {
            element= <div>Loading...</div>;
        } else if (error) {
           element= <div>Sorry, there was a problem loading the page.</div>;
         } else {
            element= null;
        }    
        return element
    }
    
    render(){
        debugger;
      let {isLoading,error}=this.props;
        return (
           <div>
             {this.renderLoader(isLoading,error)}
           </div>
        )
    }
}

export default LoaderComponent;