import React, {Component} from 'react';
import Draggable , {DraggableCore} from 'react-draggable';

 class InputTextDraggable extends Component{
   constructor(props, context){
    super(props, context);
    this.selectElement = this.selectElement.bind(this);
   }
   
   selectElement(e){
     console.log('select e ' , e);
   }
  
  render(){  
      return(
        <Draggable enableUserSelectHack={false}>
          <a href="javascript:void(0)" onClick={this.selectElement} className="inputDraggable">
            <input type="text" />
          </a>
        </Draggable>
      )
  }
}

export default InputTextDraggable;