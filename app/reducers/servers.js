// @flow
import { ADD_SERVER, REMOVE_SERVER } from '../actions/server';

const DEFAULT_STATE = [];

const servers = (state: Array<Object> = DEFAULT_STATE, action: Object) => {
  switch (action.type) {
    case ADD_SERVER:
      return [
        ...state,
        { id: action.id, settings: action.settings }
      ];
    case REMOVE_SERVER:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

export default servers;
