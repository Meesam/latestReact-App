import React, {Component} from 'react';
import Draggable , {DraggableCore} from 'react-draggable';
import ElementContainer from '../commonComponent/elementContainer';

 export default class InputTextDraggable extends Component{
  constructor(props,context){
    super(props,context)
    this.state={
      title:this.props.messageBoxTitle
    }
    this.handleClick=this.handleClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.messageBoxTitle !== nextProps.messageBoxTitle) {
       this.setState({title: nextProps.messageBoxTitle});
    }
  }

  handleClick(){
    this.props.selectElement('messagebox');
  }

  
  render(){    
     this.props;
      return(
          <Draggable enableUserSelectHack={false}>
            <div href='javascript:void(0)' onClick={this.handleClick}>
              <ElementContainer title={this.state.title} icon="fa fa-envelope-square">
                <a href='javascript:void(0)' onClick={this.handleClick}>
                 <h3>
                   this is content
                 </h3>
                </a>
              </ElementContainer>
            </div>
          </Draggable>
        )
    }
}

