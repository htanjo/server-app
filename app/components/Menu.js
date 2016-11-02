// @flow
import React, { Component } from 'react';
import ServerListMenu from '../containers/ServerListMenu';
import styles from './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className={styles.menu}>
        <ServerListMenu />
      </div>
    );
  }
}

export default Menu;
