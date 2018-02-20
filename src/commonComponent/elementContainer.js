import React,{Component} from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

class ElementContainer extends Component{
  constructor(props,context){
    super(props,context);
    this.state={
      Title:this.props.title ? this.props.title :'Container',
      Icon:this.props.icon ? this.props.icon :'fa fa-edit'
    }
    this.handleClick=this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.title !== nextProps.title) {
      this.setState({Title: nextProps.title});
    }
  }

  handleClick(e, data) {
    console.log(data);
  }

  render(){ 
    return(
      <div>  
        <ContextMenuTrigger id="some_unique_identifier">
          <div className="card mb-3 cardContainer">
            <div className="card-header cardHeader">
              <i className={this.state.Icon}></i>{this.state.Title}</div>
                <div className="list-group list-group-flush small">
                  <div className="list-group-item list-group-item-action">
                      {this.props.children}
                  </div>
                </div>
            </div>
          </ContextMenuTrigger>
          <ContextMenu id="some_unique_identifier">
            <MenuItem data={{ item: 'item 1' }} onClick={this.handleClick}>
              ContextMenu Item 1
            </MenuItem>
            <MenuItem data={{ item: 'item 2' }} onClick={this.handleClick}>
              ContextMenu Item 2
            </MenuItem>
            <MenuItem divider />
            <MenuItem data={{ item: 'item 3' }} onClick={this.handleClick}>
              ContextMenu Item 3
            </MenuItem>
        </ContextMenu>
       </div>
      )
  }
}

export default ElementContainer;

