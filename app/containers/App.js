// @flow
import { connect } from 'react-redux';
import Layout from '../components/Layout';

const mapStateToProps = (state) => ({
  showMenu: state.servers.length > 0
});

const mapDispatchToProps = () => ({
});

const App = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default App;
