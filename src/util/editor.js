import React,{Component} from 'react';
import InputTextDraggable from '../commonComponent/inputTextDraggable';

class Editor extends Component{
    render(){
        return(
         <div id="editor" className="editor">
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#home" role="tab">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#profile" role="tab">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#messages" role="tab">Messages</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#settings" role="tab">Settings</a>
                </li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane active" id="home" role="tabpanel">
                    <InputTextDraggable />
                </div>
                <div className="tab-pane" id="profile" role="tabpanel">...</div>
                <div className="tab-pane" id="messages" role="tabpanel">...</div>
                <div className="tab-pane" id="settings" role="tabpanel">...</div>
            </div>
            
         </div>
      )
  }
}

export default Editor;

