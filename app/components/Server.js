// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Dropzone from 'react-dropzone';
import styles from './Server.css';

const { dialog } = require('electron').remote;

class Server extends Component {
  static propTypes = {
    start: PropTypes.func.isRequired,
    shutdown: PropTypes.func.isRequired,
    servers: PropTypes.arrayOf(PropTypes.object).isRequired
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
    const { shutdown, servers } = this.props;
    return (
      <div className={styles.container}>
        <h1>Server</h1>
        <div>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div>
          {servers.map(server => (
            <div key={server.id}>
              {server.baseDir} <button onClick={() => shutdown(server.id)}>Shutdown</button>
            </div>
          ))}
        </div>
        <div>
          <div>
            <Dropzone onDrop={this.handleDrop} disableClick multiple={false}>
              <button onClick={this.handleClick}>Drop folder here</button>
            </Dropzone>
          </div>
        </div>
      </div>
    );
  }
}

export default Server;
