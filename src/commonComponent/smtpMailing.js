import React , {Component} from 'react';
import Draggable , {DraggableCore} from 'react-draggable';
import ElementContainer from '../commonComponent/elementContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {selectElement} from '../actions/elementsAction';


 class SmtpMailing extends Component{
  constructor(props,context){
    super(props,context)
    this.state={
      title:this.props.mailBoxTitle
    }
    this.handleClick=this.handleClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.mailBoxTitle !== nextProps.mailBoxTitle) {
       this.setState({title: nextProps.mailBoxTitle});
    }
  }

  handleClick(){
    this.props.selectElement('smtp');
  }

  render(){    
      return(
          <Draggable enableUserSelectHack={false}>
            <div href='javascript:void(0)' onClick={this.handleClick}>
              <ElementContainer title={this.state.title} icon="fa fa-envelope">
                <a href='javascript:void(0)' onClick={this.handleClick}>
                 <h3>
                  this is Mail container
                 </h3>
                </a>
              </ElementContainer>
            </div>
          </Draggable>
        )
    }
}


const mapStateToProps = state => ({
  mailBoxTitle: state.workbenchReducer.mailBoxTitle,
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
)(SmtpMailing)
