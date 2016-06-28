import ActionTypes from '../constants/ActionTypes';
// import WebAPIUtils from '../utils/WebAPIUtils';

const AppActions = {
    initialize() {
        return {
            type: ActionTypes.INITIALIZE
        };
    },

    placeholder(inc) {
        return {
            type: ActionTypes.PLACEHOLDER,
            inc
        };
    },

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
