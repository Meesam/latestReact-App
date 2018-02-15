import React, {Component} from 'react';
import Draggable , {DraggableCore} from 'react-draggable';
import ElementContainer from '../commonComponent/elementContainer';
import { connect } from 'react-redux'


 class InputTextDraggable extends Component{
  constructor(props,context){
    super(props,context)
    this.state={
      title:this.props.title
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.title !== nextProps.title) {
       this.setState({title: nextProps.title});
    }
 }

  
  render(){    
      return(
          <Draggable enableUserSelectHack={false}>
            <div>
              <ElementContainer title={this.state.title} icon="fa fa-envelope-square">
                <h3>
                  this is content
                </h3>
              </ElementContainer>
            </div>
          </Draggable>
        )
    }
}


const mapStateToProps = state => ({
  title: state.workbenchReducer.title,
  isTitleChanging: state.workbenchReducer.isTitleChanging,
})

export default connect(
  mapStateToProps,
  null
)(InputTextDraggable)
