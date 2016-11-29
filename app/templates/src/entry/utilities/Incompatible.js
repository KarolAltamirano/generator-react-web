import UAParser from 'ua-parser-js';
import Mustache from 'mustache';

const uaParser = new UAParser();

const Incompatible = {
    uaResult: uaParser.getResult(),

    /**
     * Check browser compatibility
     *
     * @return {boolean} for uncompatible browser return 'true', otherwise 'false'
     */
    isIncompatibleBrowser() {
        const listOfSupported = [
            { browser: 'Chrome', version: 43 },
            { browser: 'Firefox', version: 38 },
            { browser: 'Safari', version: 7 },
            { browser: 'Mobile Safari', version: 7 },
            { browser: 'IE', version: 11 },
            { browser: 'Edge', version: 12 },
            { browser: 'IEMobile', version: 11 }
        ];
        let incomp = true;

        for (let i = 0; i < listOfSupported.length; i++) {
            if (listOfSupported[i].browser === this.uaResult.browser.name &&
                listOfSupported[i].version <= parseInt(this.uaResult.browser.major, 10)) {
                incomp = false;
            }
        }

        return incomp;
    },

    /**
     * Add 'incompatible' class to documentElement in unsupported browsers
     */
    addClass() {
        if (this.isIncompatibleBrowser()) {
            // if browser is incompatible
            document.documentElement.className = `incompatible ${document.documentElement.className}`;
        }
    },

    /**
     * Render incompatible browser page to the DOM
     *
     * @param  {string} template html template
     * @param  {Object} style    css style object
     * @param  {Object} copy     page copy
     */
    render(template, style, copy) {
        const output = Mustache.render(template, { style, copy });
        const el = document.getElementById('incompatibleBrowser');

        if (this.isIncompatibleBrowser()) {
            el.innerHTML = output;
        }
    }
};

export default Incompatible;
