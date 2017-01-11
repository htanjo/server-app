// @flow
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Menu from './Menu';
import styles from './Layout.css';

class Layout extends Component {
  static propTypes = {
    showMenu: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired
  };

  componentDidMount() {
    window.addEventListener('dragover', event => event.preventDefault(), false);
    window.addEventListener('drop', event => event.preventDefault(), false);
  }

  render() {
    const { showMenu, children } = this.props;
    return (
      <div className={classNames(styles.app, showMenu && styles.showMenu)}>
        <div className={styles.menu}>
          <Menu />
        </div>
        <div className={styles.page}>
          {children}
        </div>
      </div>
    );
  }
}

export default Layout;
