import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import configureStore from './store/configureStore';
import routes from './routes';
import AppActions from './actions/AppActions';

let store;
let history;

const App = {
    /**
     * Render application
     *
     * @param  {Store}     pStore   redux store
     * @param  {History}   pHistory router history method
     * @param  {Component} pRoutes  application routes
     */
    render(pStore, pHistory, pRoutes) {
        ReactDOM.render(
            <AppContainer key={Math.random()}>
                <Provider store={pStore}>
                    <Router history={pHistory}>{pRoutes}</Router>
                </Provider>
            </AppContainer>,
            document.getElementById('container')
        );
    },

    /**
     * Run application
     */
    run() {
        // create store
        store = configureStore();

        // create browser history for router
        history = syncHistoryWithStore(browserHistory, store);

        // render aplication
        this.render(store, history, routes);

        // dispatch initialize action
        store.dispatch(AppActions.initialize());
    }
};

if (module.hot) {
    module.hot.accept('./routes', () => {
        App.render(store, history, require('./routes').default);
    });
}

export default App;
