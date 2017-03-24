// @flow

import { jsdom } from 'jsdom';

const noop = () => 0;

(require: any).extensions['.css'] = noop;
(require: any).extensions['.scss'] = noop;
(require: any).extensions['.svg'] = noop;
(require: any).extensions['.png'] = noop;
(require: any).extensions['.jpg'] = noop;
(require: any).extensions['.gif'] = noop;

const exposedProperties = ['window', 'document'];

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

Object.keys(global.window).forEach((property: string) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = global.window[property];
  }
});
