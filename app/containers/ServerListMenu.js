// @flow
import { connect } from 'react-redux';
import ServerList from '../components/ServerList';
import { shutdownServer } from '../actions/server';

const mapStateToProps = (state) => ({
  servers: state.servers
});

const mapDispatchToProps = (dispatch) => ({
  onClickClose: (serverId) => dispatch(shutdownServer(serverId))
});

const ServerListMenu = connect(mapStateToProps, mapDispatchToProps)(ServerList);

export default ServerListMenu;
