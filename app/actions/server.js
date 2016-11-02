// @flow
import * as serverUtils from '../utils/server';

export const ADD_SERVER = 'ADD_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';

export const addServer = (id: string, settings: Object) => ({
  type: ADD_SERVER,
  id,
  settings
});

export const removeServer = (id: string) => ({
  type: REMOVE_SERVER,
  id
});

export const startServer = (filePath: string) => (dispatch: Function) =>
  serverUtils.create(filePath)
    .then((server) => dispatch(addServer(server.id, server.settings)))
    .catch();

export const shutdownServer = (id: string) => (dispatch: Function) =>
  serverUtils.exit(id)
    .then(dispatch(removeServer(id)))
    .catch();
