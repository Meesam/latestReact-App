import React,{Component} from 'react';

class ElementContainer extends Component{
  constructor(props,context){
    super(props,context);
    this.state={
      Title:this.props.title ? this.props.title :'Container',
      Icon:this.props.icon ? this.props.icon :'fa fa-edit'
    }
  }

  componentWillReceiveProps(nextProps) {
     if(this.props.title !== nextProps.title) {
        this.setState({Title: nextProps.title});
     }
  }

  render(){ 
    return(
        <div className="card mb-3 cardContainer">
         <div className="card-header cardHeader">
           <i className={this.state.Icon}></i>{this.state.Title}</div>
            <div className="list-group list-group-flush small">
            <div className="list-group-item list-group-item-action">
                {this.props.children}
            </div>
            </div>
        </div>
      )
  }
}

export default ElementContainer;

