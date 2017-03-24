// @flow

import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Main from './containers/Main/Main';
import Template from './containers/Template/Template';

/**
 * Define routes
 */
const routes = (
    <Route path="/" component={Main}>
        <IndexRoute component={Template} />
        <Redirect from="*" to="/" />
    </Route>
);

export default routes;
