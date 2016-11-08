// @flow
import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import classNames from 'classnames';
import ServerListMenu from '../containers/ServerListMenu';
import styles from './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className={styles.menu}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <IndexLink to="/" className={styles.label} activeClassName={styles.active}>
              <i className={classNames(styles.icon, 'fa fa-plus-square')} aria-hidden="true" />
              New Server
            </IndexLink>
          </li>
        </ul>
        <ServerListMenu />
      </div>
    );
  }
}

export default Menu;
