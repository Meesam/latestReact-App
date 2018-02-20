import React, {Component} from 'react';
import Draggable , {DraggableCore} from 'react-draggable';
import ElementContainer from '../commonComponent/elementContainer';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {selectElement} from '../actions/elementsAction';


 class InputTextDraggable extends Component{
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


const mapStateToProps = state => ({
  messageBoxTitle: state.workbenchReducer.messageBoxTitle,
  isTitleChanging: state.workbenchReducer.isTitleChanging,
  elementType:state.elementReducer.elementType,
  elementClick:state.elementReducer.elementClick
})

const mapDispatchToProps = dispatch => bindActionCreators({
  selectElement
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputTextDraggable)
