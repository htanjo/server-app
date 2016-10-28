// @flow
import React, { Component, PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import styles from './ServerDropzone.css';

const { dialog } = require('electron').remote;

class ServerDropzone extends Component {
  static propTypes = {
    start: PropTypes.func.isRequired
  };

  handleDrop = (files: Object) => {
    const file = files && files[0];
    if (!file || !file.path) return;
    this.props.start(file.path);
  }

  handleClick = () => {
    dialog.showOpenDialog({ properties: ['openFile', 'openDirectory'] }, filePaths => {
      if (!filePaths || !filePaths[0]) return;
      this.props.start(filePaths[0]);
    });
  }

  render() {
    return (
      <div className={styles.container}>
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

export default ServerDropzone;
