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
      <div className={styles.container}>
        <h2>Servers</h2>
        {servers.length &&
        <table className={styles.table}>
          <tbody>
            {servers.map(server => (
              <tr key={server.id}>
                <td className={styles.textColumn}>
                  <span title={server.settings.baseDir}>{server.settings.dirname}</span>
                </td>
                <td className={styles.actionColumn}>
                  <button onClick={() => shutdown(server.id)}>Shutdown</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>}
      </div>
    );
  }
}

export default ServerList;
