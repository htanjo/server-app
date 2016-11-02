// @flow
import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import ServerDetailPage from './containers/ServerDetailPage';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/servers/:serverId" component={ServerDetailPage} />
    <Redirect from="*" to="/" />
  </Route>
);

export default routes;
