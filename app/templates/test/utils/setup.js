import { jsdom } from 'jsdom';

function noop() { return null; }

require.extensions['.css'] = noop;
require.extensions['.scss'] = noop;
require.extensions['.svg'] = noop;
require.extensions['.png'] = noop;
require.extensions['.jpg'] = noop;
require.extensions['.gif'] = noop;

const exposedProperties = ['window', 'document'];

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

Object.keys(global.window).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = global.window[property];
    }
});
