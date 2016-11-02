// @flow
import { connect } from 'react-redux';
import Home from '../components/Home';
import { startServer } from '../actions/server';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  startServer: (filePath) => dispatch(startServer(filePath))
});

const HomePage = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomePage;
