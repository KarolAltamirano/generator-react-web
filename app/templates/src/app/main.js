// @flow

import 'babel-polyfill';
import 'whatwg-fetch';
import 'modernizr';
import 'normalize.css';

import App from './App';

// import global styles
import './style/global/global.scss';

// bootstrap application
window.addEventListener('load', () => {
  // run app
  App.run();
});
