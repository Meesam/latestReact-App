import React, {Component} from 'react';
import {messageBoxProperties} from '../properties/messageBox';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {changeTitle} from '../actions/workbenchAction';


class PropertyWindow extends Component{
  constructor(props,context){
    super(props,context)
    this.state={
      properties:{}
    }

    this.handleChange=this.handleChange.bind(this);
  }

  componentWillMount(){
    this.setState({properties:messageBoxProperties});
  }

  handleChange(event) {
    this.props.changeTitle(event.target.value);
  }

  bindElementProperties(properties){  
    return Object.keys(properties).map((key)=> { 
        return (
          <div className="list-group-item list-group-item-action" key={key}>
                <div className="media">
                <div className="d-flex mr-3 rounded-circle">
                  {key}
                </div>
                <div className="media-body editable-icon">
                    { (() => { 
                      switch(properties[key].Type){
                        case 'List':
                        return (
                          <select>
                            <option>OK</option>
                            <option>Cancel </option>
                          </select>
                        )

                        case 'Content':
                         return(
                           <div>
                             <input type='text' disabled />
                             <a href='javascript:void(0)'>
                                <i className='fa fa-edit fa-2x'></i>
                             </a> 
                           </div>
                         )

                        default :
                          return (
                            <input type='text' name={properties[key].UniqueName} value={this.props.title} onChange={this.handleChange} />
                          )
                      }
                    })()}
                </div>
                </div>
          </div>  
        )
    });
  }
  
  
    render(){
      return(
        <div className="card mb-3 dock" id="propertyWindow">
         <div className="card-header">
           <i className="fa fa-bell-o"></i> Property Window</div>
         <div className="list-group list-group-flush small">
           {
             this.bindElementProperties(this.state.properties)
           }
         </div>
       </div>
      )
  }
} 


const mapStateToProps = state => ({
  title: state.workbenchReducer.title,
  isTitleChanging: state.workbenchReducer.isTitleChanging,
})

const mapDispatchToProps = dispatch => bindActionCreators({
changeTitle
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyWindow)