// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import styles from './Menu.css';

class ServerList extends Component {
  static propTypes = {
    servers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      settings: PropTypes.object.isRequired
    }).isRequired).isRequired,
    onClickClose: PropTypes.func.isRequired
  }

  getServerList = () => {
    const { servers, onClickClose } = this.props;
    return (
      <ul className={styles.list}>
        {servers.map(server => (
          <li key={server.id} className={styles.listItem} title={server.settings.baseDir}>
            <Link to={`/servers/${server.id}`} className={styles.label} activeClassName={styles.active}>
              <i className={classNames(styles.icon, 'fa fa-folder')} aria-hidden="true" />
              {server.settings.dirname}
            </Link>
            <button className={styles.close} title="Shutdown" onClick={() => onClickClose(server.id)}>
              <i className="fa fa-ban" aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { servers } = this.props;
    return (
      !servers.length
        ? null
        : this.getServerList()
    );
  }
}

export default ServerList;
