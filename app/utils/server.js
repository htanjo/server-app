// @flow
import path from 'path';
import fs from 'fs';
import { remote } from 'electron';
import uniqueId from 'lodash/uniqueId';

const browserSync = remote.require('browser-sync');

export function createServer(filePath: string) {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (err, stats) => {
      if (err) return reject(err);
      const isDirectory = stats.isDirectory();
      const baseDir = isDirectory ? filePath : path.dirname(filePath);
      const options = {
        server: { baseDir },
        files: [`${baseDir}/**`, '!**/node_modules/**'],
        notify: false
      };
      const id = uniqueId('server-');
      const bs = browserSync.create(id);
      bs.init(options, () => resolve({ id, baseDir }));
    });
  });
}

export function exitServer(id: string) {
  return new Promise(resolve => {
    const bs = browserSync.get(id);
    bs.exit();
    resolve();
  });
}
