import Mustache from 'mustache';

import data from '../../../package.json';
import AppSettings from './AppSettings';

const Version = {
    /**
     * Print version info to console
     */
    logConsole() {
        if (!AppSettings.renderVersionInfo) {
            return;
        }

        // print version to console
        if (console && console.log) {
            console.log(
                `\n%cv${data.version}%c %c${data.time}%c\n\n`,
                'color: #ffffff; background: #00aa00; padding: 1px 5px;',
                'color: #ffffff; background: #d1eeee; padding: 1px 5px;',
                'color: #ffffff; background: #00aa00; padding: 1px 5px;',
                'background: #ffffff;'
            );
        }
    },

    /**
     * Get version data object
     *
     * @return {Object} version information
     */
    getCopy() {
        return data;
    },

    /**
     * Render version info to the DOM
     *
     * @param  {string} template html template
     * @param  {Object} style    css style object
     * @param  {Object} copy     page copy
     */
    render(template, style, copy) {
        const output = Mustache.render(template, { style, copy });
        const el = document.createElement('div');

        if (!AppSettings.renderVersionInfo) {
            return;
        }

        // print version to page
        el.innerHTML = output;
        document.body.appendChild(el.firstChild);
    }
};

export default Version;
