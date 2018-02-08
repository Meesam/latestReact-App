import React,{Component} from 'react';
import InputTextDraggable from '../commonComponent/inputTextDraggable';


export default class Editor extends Component{
    render(){
      return(
          <div id="editor" className="editor">
            <InputTextDraggable />
            <InputTextDraggable />
            <InputTextDraggable />
            <InputTextDraggable />
            <InputTextDraggable />
            <InputTextDraggable />
          </div>
      )
  }
}

