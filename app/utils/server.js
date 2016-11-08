// @flow
import path from 'path';
import fs from 'fs';
import browserSync from 'browser-sync';
import serveIndex from 'serve-index';
import uniqueId from 'lodash/uniqueId';

export const create = (filePath: string) => (
  new Promise((resolve, reject) => {
    fs.stat(filePath, (err, stats) => {
      if (err) return reject(err);
      const isDirectory = stats.isDirectory();
      const baseDir = isDirectory ? filePath : path.dirname(filePath);
      const startFile = isDirectory ? '' : path.basename(filePath);
      const startPath = `/${startFile}`;
      const options = {
        server: { baseDir },
        files: [`${baseDir}/**`, '!**/node_modules/**'],
        notify: false,
        startPath
      };
      const id = uniqueId('server-');
      const bs = browserSync.create(id);
      bs.init(options, (bsErr, instance) => {
        const urls = instance.getOption('urls');
        const settings = {
          dirname: path.basename(baseDir),
          baseDir,
          startFile,
          port: instance.getOption('port'),
          url: urls.get('local').replace(new RegExp(`${startPath}$`), ''),
          externalUrl: urls.get('external').replace(new RegExp(`${startPath}$`), ''),
          uiUrl: urls.get('ui'),
          startUrl: urls.get('local')
        };
        instance.addMiddleware('', serveIndex(baseDir));
        resolve({ id, settings });
      });
    });
  })
);

export const exit = (id: string) => (
  new Promise(resolve => {
    const bs = browserSync.get(id);
    bs.exit();
    resolve();
  })
);
