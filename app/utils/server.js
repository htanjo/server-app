// @flow
import path from 'path';
import fs from 'fs';
import browserSync from 'browser-sync';
import serveIndex from 'serve-index';
import uniqueId from 'lodash/uniqueId';

export function createServer(filePath: string) {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (err, stats) => {
      if (err) return reject(err);
      const isDirectory = stats.isDirectory();
      const baseDir = isDirectory ? filePath : path.dirname(filePath);
      const startPath = isDirectory ? '/' : `/${path.basename(filePath)}`;
      const options = {
        server: { baseDir },
        files: [`${baseDir}/**`, '!**/node_modules/**'],
        notify: false,
        startPath
      };
      const id = uniqueId('server-');
      const bs = browserSync.create(id);
      bs.init(options, (bsErr, instance) => {
        instance.addMiddleware('', serveIndex(baseDir));
        resolve({ id, baseDir });
      });
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
