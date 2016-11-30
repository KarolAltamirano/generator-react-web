const AppSettings = {
    /**
     * Print version info on the page
     *
     * @type {boolean}
     */
    renderVersionInfo: true,

    /**
     * Helper method for detecting production enviroment
     *
     * @return {boolean} 'true' for production enviroment, 'false' for development
     */
    isProduction() {
        const host = window.location.hostname;

        if (host === 'localhost') {
            return false;
        }

        return true;
    },

    /**
     * Helper method for detecting development enviroment
     *
     * @return {boolean} 'false' for production enviroment, 'true' for development
     */
    isNotProduction() {
        return !this.isProduction();
    }
};

export default AppSettings;
