// import Immutable from 'immutable';
import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

var AppStore = Object.assign({}, EventEmitter.prototype, {
    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(cb) {
        this.on(CHANGE_EVENT, cb);
    },

    removeChangeListener(cb) {
        this.removeListener(CHANGE_EVENT, cb);
    }
});

AppStore.dispatchToken = AppDispatcher.register(function (action) {
    switch (action.type) {
        case AppConstants.INITIALIZE:
            console.log('Dispatched INITIALIZE action handled ...');
            AppStore.emitChange();
            break;
        case AppConstants.PLACEHOLDER:
            console.log('Dispatched PLACEHOLDER action handled ...');
            AppStore.emitChange();
            break;
    }
});

export default AppStore;
