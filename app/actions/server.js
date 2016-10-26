// @flow
import { remote } from 'electron';

const browserSync = remote.require('browser-sync');

export const ADD_SERVER = 'ADD_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';

export function addServer(id: string) {
  return {
    type: ADD_SERVER,
    id
  };
}

export function removeServer(id: string) {
  return {
    type: REMOVE_SERVER,
    id
  };
}

export function start(id: string, options: Object) {
  return (dispatch: Function) => {
    const bs = browserSync.create(id);
    bs.init(options, () => dispatch(addServer(id)));
  };
}

export function shutdown(id: string) {
  return (dispatch: Function) => {
    const bs = browserSync.get(id);
    bs.exit();
    dispatch(removeServer(id));
  };
}
