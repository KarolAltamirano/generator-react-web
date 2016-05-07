import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes';

import AppActions from './actions/AppActions';

var App = {};

App.run = function () {
    ReactDOM.render(
        <Router history={browserHistory}>{routes}</Router>,
        document.getElementById('container')
    );

    AppActions.initialize();
};

export default App;
