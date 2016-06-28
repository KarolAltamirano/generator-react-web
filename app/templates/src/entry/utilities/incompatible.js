/* eslint key-spacing: 0, comma-spacing: 0 */

import UAParser from 'ua-parser-js';
import Mustache from 'mustache';

var uaParser = new UAParser(),
    incompatible = {};

incompatible.uaResult = uaParser.getResult();

/**
 * Check browser compatibility
 *
 * @return {boolean} - for uncompatible browser return 'true', otherwise 'false'
 */
incompatible.isIncompatibleBrowser = function () {
    var listOfSupported = [
            { browser: 'Chrome'       , version: 43 },
            { browser: 'Firefox'      , version: 38 },
            { browser: 'Safari'       , version:  7 },
            { browser: 'Mobile Safari', version:  7 },
            { browser: 'IE'           , version: 11 },
            { browser: 'Edge'         , version: 12 },
            { browser: 'IEMobile'     , version: 11 }
        ],
        incomp = true,
        i;

    for (i = 0; i < listOfSupported.length; i++) {
        if (listOfSupported[i].browser === incompatible.uaResult.browser.name &&
            listOfSupported[i].version <= parseInt(incompatible.uaResult.browser.major, 10))  {
            incomp = false;
        }
    }

    return incomp;
};

/**
 * Add 'incompatible' class to documentElement in unsupported browsers
 */
incompatible.addClass = function () {
    if (incompatible.isIncompatibleBrowser()) {
        // if browser is incompatible
        document.documentElement.className = 'incompatible ' + document.documentElement.className;
    }
};

/**
 * Render incompatible browser page to the DOM
 *
 * @param  {string} template - thml template
 * @param  {Object} style    - css style object
 * @param  {Object} copy     - page copy
 */
incompatible.render = function (template, style, copy) {
    var output = Mustache.render(template, { style, copy }),
        el = document.getElementById('incompatibleBrowser');

    if (incompatible.isIncompatibleBrowser()) {
        el.innerHTML = output;
    }
};

export default incompatible;
