import ActionTypes from '../constants/ActionTypes';
// import WebAPIUtils from '../utils/WebAPIUtils';

/**
 * App actions
 *
 * @type {Object}
 */
const AppActions = {
    /**
     * App initialize action
     *
     * @return {Object}
     */
    initialize() {
        return {
            type: ActionTypes.INITIALIZE
        };
    },

    /**
     * Placeholder action (example)
     *
     * @param  {number} inc - increment value
     *
     * @return {Object}
     */
    placeholder(inc) {
        return {
            type: ActionTypes.PLACEHOLDER,
            inc
        };
    },

    /**
     * Example of async action
     *
     * @param  {number} inc - increment value
     *
     * @return {Function}
     */
    placeholderAsync(inc) {
        return function (dispatch) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    dispatch(AppActions.placeholder(inc));
                    resolve();
                }, 500);
            });
        };
    }
};

export default AppActions;
