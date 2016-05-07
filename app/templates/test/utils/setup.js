import { jsdom } from 'jsdom';

var exposedProperties = ['window', 'document'];

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

Object.keys(global.window).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = global.window[property];
    }
});
