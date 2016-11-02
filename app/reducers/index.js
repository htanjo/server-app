// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import servers from './servers';

const rootReducer = combineReducers({
  servers,
  routing
});

export default rootReducer;
