// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Server from '../components/Server';
import * as ServerActions from '../actions/server';


function mapStateToProps(state) {
  return {
    servers: state.server.servers
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ServerActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Server);
