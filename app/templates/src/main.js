// @flow

import 'babel-polyfill';
import 'whatwg-fetch';
import 'modernizr';
import 'normalize.css';

import './style/global';
import App from './App';

// bootstrap application
window.addEventListener('load', () => {
  // run app
  App.run();
});
