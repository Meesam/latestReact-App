// import {connect} from 'react-redux';
// import WorkBench from './workbench';
// import {withRouter} from "react-router-dom";
// import { bindActionCreators } from 'redux'
// import {selectElement} from '../../actions/elementsAction';
// import {changeTitle} from '../../actions/workbenchAction';

// const mapStateToProps = state => ({
//     messageBoxTitle: state.messageBoxTitle,
//     isTitleChanging: state.isTitleChanging,
//     elementType:state.elementType,
//     elementClick:state.elementClick,
//     title: state.title
// })
  

//   const mapDispatchToProps = (dispatch) => ({
//     selectElement: (someData) => dispatch(selectElement(someData)),
//     changeTitle:(inputData)=>dispatch(changeTitle(inputData))
//   });


// // const mapDispatchToProps = dispatch => bindActionCreators({
// //     selectElement , changeTitle
// // }, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(WorkBench);