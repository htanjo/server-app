// @flow
import React, { Component, PropTypes } from 'react';
import ServerDropzone from './ServerDropzone';
import ServerList from './ServerList';
import styles from './Home.css';

class Home extends Component {
  static propTypes = {
    start: PropTypes.func.isRequired,
    shutdown: PropTypes.func.isRequired,
    servers: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    const { servers, start, shutdown } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.side}>
          <ServerList servers={servers} shutdown={shutdown} />
        </div>
        <div className={styles.main}>
          <ServerDropzone start={start} />
        </div>
      </div>
    );
  }
}

export default Home;
