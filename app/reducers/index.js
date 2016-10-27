// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import server from './server';

const rootReducer = combineReducers({
  server,
  routing
});

export default rootReducer;
