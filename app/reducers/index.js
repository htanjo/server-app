// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import server from './server';

const rootReducer = combineReducers({
  counter,
  server,
  routing
});

export default rootReducer;
