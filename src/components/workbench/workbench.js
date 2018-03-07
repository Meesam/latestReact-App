import React ,{Component} from 'react';
import {Grid, Row , Col, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import { withReducer } from "../../util/withReducer";
import { bindActionCreators } from 'redux'
import workBenchReducer from "./workbench.reducer";
import Draggable from 'react-draggable';
import Resizable from 're-resizable'; 
import Editor from '../../util/editor';
import PropertyWindow from '../../commonComponent/propertyWindow';
import {selectElement} from '../../actions/elementsAction';
import {changeTitle} from '../../actions/workbenchAction';


class WorkBench extends Component{
    constructor(props){
       super(props);
       this.state={
        width:330,
        height:280
       }
    }

    render(){
      return(
        <div>
        <Grid>
        <Row className="show-grid">
         <Col xs={12} md={8}>
          <Editor {...this.props} />
         </Col>
         <Col xs={6} md={4}>
         <Draggable enableUserSelectHack={false}>
          <Resizable  size={{ width: this.state.width, height: this.state.height }}
            onResizeStop={(e, direction, ref, d) => {
              this.setState({
                width: this.state.width + d.width,
                height: this.state.height + d.height,
              });
            }}>
            <PropertyWindow {...this.props} />
          </Resizable>
         </Draggable>
         </Col>
        </Row>
       </Grid> 
        </div>
      )
    }
}


const mapStateToProps = state => ({
  messageBoxTitle: state.workbench.messageBoxTitle,
  isTitleChanging: state.workbench.isTitleChanging,
  elementType:state.workbench.elementType,
  elementClick:state.workbench.elementClick,
  title: state.workbench.title
})


 const mapDispatchToProps = dispatch => bindActionCreators({
    selectElement , changeTitle
 }, dispatch)

export default withReducer("workbench", workBenchReducer)(connect(mapStateToProps, mapDispatchToProps)(WorkBench));
