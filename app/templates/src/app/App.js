import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import routes from './routes';
import AppActions from './actions/AppActions';

var App = {};

App.run = function () {
    var initialState = {},
        store = configureStore(initialState),
        history = syncHistoryWithStore(browserHistory, store);

    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>{routes}</Router>
        </Provider>,
        document.getElementById('container')
    );

    store.dispatch(AppActions.initialize());
};

export default App;
