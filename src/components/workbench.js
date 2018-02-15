import React ,{Component} from 'react';
import {Grid, Row , Col, Panel } from 'react-bootstrap';
import Draggable from 'react-draggable';
import Resizable from 're-resizable'; 
import Editor from '../util/editor';
import PropertyWindow from '../commonComponent/propertyWindow';

export default class WorkBench extends Component{
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
          <Editor />
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
            <PropertyWindow />
          </Resizable>
         </Draggable>
         </Col>
        </Row>
       </Grid> 
        </div>
      )
    }
}