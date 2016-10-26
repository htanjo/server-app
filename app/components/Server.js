// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import uniqueId from 'lodash/uniqueId';
import styles from './Server.css';

class Server extends Component {
  static propTypes = {
    start: PropTypes.func.isRequired,
    shutdown: PropTypes.func.isRequired,
    servers: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  static generateId() {
    return uniqueId('server-');
  }

  state = { baseDir: process.cwd() }

  handleBaseDirChange = (event: Event) => {
    if (event.target instanceof HTMLInputElement) {
      this.setState({ baseDir: event.target.value });
    }
  }

  startServer = () => {
    const { start } = this.props;
    const { baseDir } = this.state;
    const options = {
      server: { baseDir }
    };
    start(Server.generateId(), options);
  }

  render() {
    const { shutdown, servers } = this.props;
    const { baseDir } = this.state;
    return (
      <div className={styles.container}>
        <h1>Server</h1>
        <div>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div>
          {servers.map(server => (
            <div key={server.id}>
              {server.id} <button onClick={() => shutdown(server.id)}>Shutdown</button>
            </div>
          ))}
        </div>
        <div>
          <input className={styles.input} type="text" value={baseDir} onChange={this.handleBaseDirChange} />
          <button onClick={this.startServer}>Create server</button>
        </div>
      </div>
    );
  }
}

export default Server;
