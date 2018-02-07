import React , {Component} from 'react';
import {Button,Modal, OverlayTrigger, Popover, Tooltip} from 'react-bootstrap';

class ModalPopUp extends Component{
    constructor(props, context) {
        super(props, context);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
          show: this.props.show
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      render() {
        debugger;
        const popover = (
            <Popover id="modal-popover" title="popover">
              very popover. such engagement
            </Popover>
          );
          const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
          console.log('this props ' , this.props);
        return (

            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Text in a modal</h4>
                <p>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </p>
    
                <h4>Popover in a modal</h4>
                <p>
                  there is a{' '}
                  
                  here
                </p>
    
                <h4>Tooltips in a modal</h4>
                <p>
                  there is a{' '}
                  
                  here
                </p>
    
                <hr />
    
                <h4>Overflowing text to show scroll behavior</h4>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                  dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                  ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur
                  et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                  auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                  cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                  dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                  dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                  ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur
                  et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                  auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                  cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                  dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                  dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                  ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur
                  et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                  auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                  cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                  dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
        
        );
      }
}

export default ModalPopUp
