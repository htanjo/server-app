// @flow
import React, { Component, PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import classNames from 'classnames';
import styles from './Dropbox.css';

const { dialog } = require('electron').remote;

class Dropbox extends Component {
  static propTypes = {
    setFilePath: PropTypes.func.isRequired
  };

  state = { dialogOpen: false }

  handleDrop = (files: Object) => {
    const { setFilePath } = this.props;
    const file = files && files[0];
    if (!file || !file.path) return;
    setFilePath(file.path);
  }

  handleClick = () => {
    const { setFilePath } = this.props;
    this.setState({ dialogOpen: true });
    dialog.showOpenDialog({ properties: ['openFile', 'openDirectory'] }, filePaths => {
      this.setState({ dialogOpen: false });
      if (!filePaths || !filePaths[0]) return;
      setFilePath(filePaths[0]);
    });
  }

  render() {
    const { dialogOpen } = this.state;
    return (
      <div>
        <Dropzone
          className={classNames(styles.dropzone, dialogOpen && styles.open)}
          activeClassName={styles.active}
          onDrop={this.handleDrop}
          multiple={false}
          disableClick
        >
          <button className={styles.button} onClick={this.handleClick}>
            <span className={styles.label}>Drop file or folder here</span>
          </button>
          <div className={styles.icon}>
            <div className={styles.cube}>
              <div className={classNames(styles.plane, styles.front)}>
                <i className="fa fa-arrow-down" aria-hidden="true" />
              </div>
              <div className={classNames(styles.plane, styles.back)} />
              <div className={classNames(styles.plane, styles.right)} />
              <div className={classNames(styles.plane, styles.left)} />
              <div className={classNames(styles.plane, styles.top)} />
              <div className={classNames(styles.plane, styles.bottom)} />
            </div>
          </div>
        </Dropzone>
      </div>
    );
  }
}

export default Dropbox;
