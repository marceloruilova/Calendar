import * as ActionTypes from './ActionTypes';

export const Days = (state = { isLoading: true,
    errMess: null,
    days:[]
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DAYS:
            return {...state, isLoading: false, errMess: null, days: action.payload};

        case ActionTypes.DAYS_LOADING:
            return {...state, isLoading: true, errMess: null, days: []}

        case ActionTypes.DAYS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};