import Mustache from 'mustache';

import data from '../../../package.json';
import appSettings from './appSettings';

var version = {};

/**
 * Print version info to console
 */
version.logConsole = function () {
    if (!appSettings.renderVersionInfo) {
        return;
    }

    // print version to console
    if (console && console.log) {
        console.log(
            '\n%cv' + data.version + '%c %c' + data.time + '%c\n\n',
            'color: #ffffff; background: #00aa00; padding: 1px 5px;',
            'color: #ffffff; background: #d1eeee; padding: 1px 5px;',
            'color: #ffffff; background: #00aa00; padding: 1px 5px;',
            'background: #ffffff;'
        );
    }
};

/**
 * Get version data object
 *
 * @return {object} - version information
 */
version.getCopy = function () {
    return data;
};

/**
 * Render version info to the DOM
 *
 * @param  {string} template - thml template
 * @param  {Object} style    - css style object
 * @param  {Object} copy     - page copy
 */
version.render = function (template, style, copy) {
    var output = Mustache.render(template, { style, copy }),
        el = document.createElement('div');

    if (!appSettings.renderVersionInfo) {
        return;
    }

    // print version to page
    el.innerHTML = output;
    document.body.appendChild(el.firstChild);
};

export default version;
