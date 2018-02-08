import React, {Component} from 'react';
import Draggable from 'react-draggable';

export default class InputTextDraggable extends Component{
    render(){
        return(
            <Draggable>
              <div className="inputDraggable">
                <input type="text" name="inputName"></input>
              </div>
            </Draggable>
      )
  }
}

