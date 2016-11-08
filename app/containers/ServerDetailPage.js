// @flow
import { connect } from 'react-redux';
import ServerDetail from '../components/ServerDetail';
import { shutdownServer } from '../actions/server';

const mapStateToProps = (state, props) => {
  const serverId = props.routeParams.serverId;
  const server = state.servers.find(item => item.id === serverId);
  return {
    server
  };
};

const mapDispatchToProps = (dispatch, props) => {
  const serverId = props.routeParams.serverId;
  return {
    onClickShutdown: () => dispatch(shutdownServer(serverId))
  };
};

const ServerDetailPage = connect(mapStateToProps, mapDispatchToProps)(ServerDetail);

export default ServerDetailPage;
