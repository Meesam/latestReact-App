import {connect} from 'react-redux';
import Login from './login';
import {withRouter} from "react-router-dom";

const mapStateToProps = ({home}) => ({home});
const mapDispatchToProps = (dispatch) => ({
  //sampleAction: (someData) => dispatch(sample(someData))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));