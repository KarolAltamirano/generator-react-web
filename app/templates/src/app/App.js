import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import configureStore from './store/configureStore';
import routes from './routes';
import AppActions from './actions/AppActions';

var App = {},
    store,
    history;

/**
 * Run application
 */
App.run = function () {
    // create store
    store = configureStore();

    // create browser history for router
    history = syncHistoryWithStore(browserHistory, store);

    // render aplication
    ReactDOM.render(
        <AppContainer key={Math.random()}>
            <Provider store={store}>
                <Router history={history}>{routes}</Router>
            </Provider>
        </AppContainer>,
        document.getElementById('container')
    );

    // dispatch initialize action
    store.dispatch(AppActions.initialize());
};


if (module.hot) {
    module.hot.accept('./routes', () => {
        var nextRoutes = require('./routes').default;

        ReactDOM.render(
            <AppContainer key={Math.random()}>
                <Provider store={store}>
                    <Router history={history}>{nextRoutes}</Router>
                </Provider>
            </AppContainer>,
            document.getElementById('container')
        );
    });
}

export default App;
