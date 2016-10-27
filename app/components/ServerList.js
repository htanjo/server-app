// @flow
import React, { Component, PropTypes } from 'react';
import styles from './ServerList.css';

class ServerList extends Component {
  static propTypes = {
    shutdown: PropTypes.func.isRequired,
    servers: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    const { shutdown, servers } = this.props;
    return (
      !servers.length ? null :
        <div className={styles.container}>
          <table className={styles.table}>
            {servers.map(server => (
              <tr key={server.id}>
                <td className={styles.textColumn}>
                  <span title={server.baseDir}>{server.baseDir}</span>
                </td>
                <td className={styles.actionColumn}>
                  <button onClick={() => shutdown(server.id)}>Shutdown</button>
                </td>
              </tr>
            ))}
          </table>
        </div>
    );
  }
}

export default ServerList;
