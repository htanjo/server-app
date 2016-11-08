// @flow
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import opn from 'opn';
import NotFound from '../containers/NotFound';
import styles from './ServerDetail.css';

class ServerDetail extends Component {
  static propTypes = {
    server: PropTypes.shape({
      settings: PropTypes.object.isRequired
    }),
    onClickShutdown: PropTypes.func.isRequired
  };

  getTable = () => {
    const {
      baseDir,
      startFile,
      port,
      url,
      externalUrl,
      uiUrl
    } = this.props.server.settings;
    return (
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Base Directory</th>
            <td><span title={baseDir}>{baseDir}</span></td>
          </tr>
          <tr>
            <th>Start File</th>
            <td><span>{startFile || '-'}</span></td>
          </tr>
          <tr>
            <th>Port</th>
            <td><span>{port}</span></td>
          </tr>
          <tr>
            <th>URL</th>
            <td><span>{url}</span></td>
          </tr>
          <tr>
            <th>External URL</th>
            <td><span>{externalUrl}</span></td>
          </tr>
          <tr>
            <th>Control Panel</th>
            <td><span>{uiUrl}</span></td>
          </tr>
        </tbody>
      </table>
    );
  }

  render() {
    const { server, onClickShutdown } = this.props;
    if (!server) return <NotFound redirectTo="/" />;
    const table = this.getTable();
    return (
      <div className={styles.serverDetail}>
        <h1 className={styles.title}>
          <i className={classNames(styles.icon, 'fa fa-folder')} aria-hidden="true" />
          {server.settings.dirname}
        </h1>
        {table}
        <div className={styles.actions}>
          <button onClick={() => opn(server.settings.startUrl)}>
            Open URL
          </button>
          <button onClick={() => opn(server.settings.uiUrl)}>
            Control Panel
          </button>
          <button className={styles.right} onClick={onClickShutdown}>
            Shutdown
          </button>
        </div>
      </div>
    );
  }
}

export default ServerDetail;
