var AppSettings = {};

/**
 * Helper method for detecting production enviroment
 *
 * @return {boolean} - 'true' for production enviroment, 'false' for development
 */
AppSettings.isProduction = function () {
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
AppSettings.isNotProduction = function () {
    return !AppSettings.isProduction();
};

/**
 * Print version info on the page
 *
 * @type {boolean}
 */
AppSettings.renderVersionInfo = true;

export default AppSettings;
