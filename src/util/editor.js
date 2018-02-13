import React,{Component} from 'react';
import InputTextDraggable from '../commonComponent/inputTextDraggable';

class Editor extends Component{
    render(){
        return(
          <div id="editor" className="editor">
             <InputTextDraggable />
          </div>
      )
  }
}

export default Editor;

