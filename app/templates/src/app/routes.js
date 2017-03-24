// @flow

import React from 'react';
import { Route, Redirect } from 'react-router';

import Template from './containers/Template/Template';

/**
 * Define routes
 */
const routes = (
    <Route path="/" component={Template}>
        <Redirect from="*" to="/" />
    </Route>
);

export default routes;
