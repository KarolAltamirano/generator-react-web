// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

import configureStore from './store/configureStore';
import AppActions from './actions/AppActions';
import theme from './style/theme';
import translationMessages from './i18n';

import Main from './containers/Main';

/**
 * Render application
 *
 * @param  {any}   Component react component
 * @param  {Store} store     redux store
 */
function render(Component: any, store: Store) {
  ReactDOM.render(
    <AppContainer key={Math.random()}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <IntlProvider locale="en" messages={translationMessages.en}>
            <Router>
              <Route path="/" component={Component} />
            </Router>
          </IntlProvider>
        </ThemeProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
}

let store;

const App = {
  /**
   * Run application
   */
  run() {
    // create store
    store = configureStore();

    // render aplication
    render(Main, store);

    // dispatch initialize action
    store.dispatch(AppActions.initialize());
  },
};

if (module.hot) {
  (module: any).hot.accept('./containers/Main', () => {
    render(require('./containers/Main').default, store);
  });
}

export default App;
