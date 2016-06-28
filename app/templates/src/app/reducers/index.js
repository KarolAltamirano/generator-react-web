import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import template from './templateReducer';

const rootReducer = combineReducers({
    template,
    routing
});

export default rootReducer;
