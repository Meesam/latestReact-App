import {connect} from 'react-redux';
import Dashboard from './dashboard';
import {withRouter} from "react-router-dom";

const mapStateToProps = ({home}) => ({home});
const mapDispatchToProps = (dispatch) => ({
  //sampleAction: (someData) => dispatch(sample(someData))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));