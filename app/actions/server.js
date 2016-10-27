// @flow
import { createServer, exitServer } from '../utils/server';

export const ADD_SERVER = 'ADD_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';

export function addServer(id: string, baseDir: string) {
  return {
    type: ADD_SERVER,
    id,
    baseDir
  };
}

export function removeServer(id: string) {
  return {
    type: REMOVE_SERVER,
    id
  };
}

export function start(filePath: string) {
  return (dispatch: Function) => {
    createServer(filePath)
      .then((server) => dispatch(addServer(server.id, server.baseDir)))
      .catch();
  };
}

export function shutdown(id: string) {
  return (dispatch: Function) => {
    exitServer(id)
      .then(dispatch(removeServer(id)))
      .catch();
  };
}