import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {changeTitle} from '../actions/workbenchAction';
import PropertyWindow from '../commonComponent/propertyWindow';


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

