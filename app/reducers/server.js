// @flow
import { ADD_SERVER, REMOVE_SERVER } from '../actions/server';

const DEFAULT_STATE = {
  servers: []
};

export default function server(state: Object = DEFAULT_STATE, action: Object) {
  switch (action.type) {
    case ADD_SERVER:
      return {
        ...state,
        servers: [
          ...state.servers,
          { id: action.id, baseDir: action.baseDir }
        ]
      };
    case REMOVE_SERVER:
      return {
        ...state,
        servers: state.servers.filter(item => item.id !== action.id)
      };
    default:
      return state;
  }
}
