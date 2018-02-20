import React,{Component} from 'react';
import InputTextDraggable from '../commonComponent/inputTextDraggable';
import SmtpMailing from '../commonComponent/smtpMailing';

class Editor extends Component{
    render(){
        return(
          <div id="editor" className="editor">
             <InputTextDraggable />
             <SmtpMailing />
          </div>
      )
  }
}

export default Editor;

