// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import NotFound from '../containers/NotFound';
import styles from './ServerDetail.css';

class ServerDetail extends Component {
  static propTypes = {
    server: PropTypes.shape({
      id: PropTypes.string,
      settings: PropTypes.object
    }),
    onClickShutdown: PropTypes.func.isRequired
  };

  render() {
    const { server, onClickShutdown } = this.props;
    if (!server) return <NotFound redirectTo="/" />;
    return (
      <div className={styles.serverDetail}>
        <h1 className={styles.title}>{server.settings.dirname}</h1>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>Base Directory</th>
              <td><span>{server.settings.baseDir}</span></td>
            </tr>
          </tbody>
        </table>
        <button onClick={() => onClickShutdown(server.id)}>
          Shutdown
        </button>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
}

export default ServerDetail;
