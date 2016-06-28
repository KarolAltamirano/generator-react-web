import ActionTypes from '../constants/ActionTypes';
import InitialState from '../constants/InitialState';

export default function templateReducer(state = InitialState.template, action) {
    switch (action.type) {
        case ActionTypes.INITIALIZE:
            return state + 1;

        case ActionTypes.PLACEHOLDER:
            return state + action.inc;

        default:
            return state;
    }
}
