// @flow
import React, { Component, PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import styles from './Dropbox.css';

const { dialog } = require('electron').remote;

class Dropbox extends Component {
  static propTypes = {
    setFilePath: PropTypes.func.isRequired
  };

  handleDrop = (files: Object) => {
    const { setFilePath } = this.props;
    const file = files && files[0];
    if (!file || !file.path) return;
    setFilePath(file.path);
  }

  handleClick = () => {
    const { setFilePath } = this.props;
    dialog.showOpenDialog({ properties: ['openFile', 'openDirectory'] }, filePaths => {
      if (!filePaths || !filePaths[0]) return;
      setFilePath(filePaths[0]);
    });
  }

  render() {
    return (
      <div>
        <Dropzone
          className={styles.dropzone}
          activeClassName={styles.active}
          onDrop={this.handleDrop}
          multiple={false}
          disableClick
        >
          <button className={styles.button} onClick={this.handleClick}>
            Drop file or folder here
          </button>
        </Dropzone>
      </div>
    );
  }
}

export default Dropbox;
