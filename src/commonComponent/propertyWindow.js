import React, {Component} from 'react';
import {Proporties} from '../properties/index';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {changeTitle} from '../actions/workbenchAction';
import {selectElement} from '../actions/elementsAction';

class PropertyWindow extends Component{
  constructor(props,context){
    super(props,context)
    this.state={
      properties:{}
    }
    this.handleChange=this.handleChange.bind(this);
  }

  componentWillMount(){
    debugger;
    switch(this.props.elementType){
      case 'smtp':
      this.setState({properties:Proporties.smtpMailingProperties});
       break;

       case 'messagebox':
       this.setState({properties:Proporties.messageBoxProperties});
       break;
       
       default:
       this.setState({properties:Proporties.defaultProperties});
       break;
    }
  }

  componentWillReceiveProps(nextProps) {
      switch(this.props.elementType){
        case 'smtp':
        this.setState({properties:Proporties.smtpMailingProperties});
         break;
         case 'messagebox':
         this.setState({properties:Proporties.messageBoxProperties});
         break;
         this.setState({properties:Proporties.defaultProperties});
         default:
      }
  }

  handleChange(event,elementName) {
    this.props.changeTitle({name:elementName,value:event.target.value})
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
                            <input type='text' name={properties[key].UniqueName} value={this.props.title}
                            onChange={(e)=>this.handleChange(e,properties[key].UniqueName)} />
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
      debugger;
      console.log('window props ' , this.props);
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
  elementType:state.elementReducer.elementType,
  elementClick:state.elementReducer.elementClick
})

const mapDispatchToProps = dispatch => bindActionCreators({
changeTitle
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyWindow)