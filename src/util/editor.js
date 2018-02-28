import React,{Component} from 'react';
import InputTextDraggable from '../commonComponent/inputTextDraggable';
import SmtpMailing from '../commonComponent/smtpMailing';

class Editor extends Component{
    render(){
        return(
         <div id="editor" className="editor">
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#home" role="tab">Home</a>
                </li>
            </ul>   
            <div className="tab-content">
                <div className="tab-pane active" id="home" role="tabpanel">
                    <InputTextDraggable {...this.props} />
                </div>
            </div>
            
         </div>
      )
  }
}

export default Editor;

