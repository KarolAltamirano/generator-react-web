import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
// import WebAPIUtils from '../utils/WebAPIUtils';

var AppActions = {
    initialize() {
        AppDispatcher.dispatch({
            type: AppConstants.INITIALIZE,
            data: null
        });
    },

    placeholder(data) {
        AppDispatcher.dispatch({
            type: AppConstants.PLACEHOLDER,
            data: data
        });
    }
};

export default AppActions;
