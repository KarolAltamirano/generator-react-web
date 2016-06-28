var appSettings = {};

/**
 * Helper method for detecting production enviroment
 *
 * @return {boolean} - 'true' for production enviroment, 'false' for development
 */
appSettings.isProduction = function () {
    var host = window.location.hostname;

    if (host === 'localhost') {
        return false;
    }

    return true;
};

/**
 * Helper method for detecting development enviroment
 *
 * @return {boolean} - 'false' for production enviroment, 'true' for development
 */
appSettings.isNotProduction = function () {
    return !appSettings.isProduction();
};

/**
 * Print version info on the page
 *
 * @type {boolean}
 */
appSettings.renderVersionInfo = true;

export default appSettings;
