// @flow
import React, { Component, PropTypes } from 'react';
import Dropbox from './Dropbox';
import styles from './Home.css';

class Home extends Component {
  static propTypes = {
    startServer: PropTypes.func.isRequired
  };

  render() {
    const { startServer } = this.props;
    return (
      <div className={styles.home}>
        <Dropbox setFilePath={startServer} />
      </div>
    );
  }
}

export default Home;
