import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import routes from './routes';
import AppActions from './actions/AppActions';

var App = {};

/**
 * Run application
 */
App.run = function () {
    // create store
    var store = configureStore();

    // create browser history for router
    var history = syncHistoryWithStore(browserHistory, store);

    // render aplication
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>{routes}</Router>
        </Provider>,
        document.getElementById('container')
    );

    // dispatch initialize action
    store.dispatch(AppActions.initialize());
};

export default App;
