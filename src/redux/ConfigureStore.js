import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createForms, initialFieldState } from 'react-redux-form';
import { Days } from './days';
import { Reminders } from './reminders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            days: Days,
            reminders: Reminders,
            ...createForms({
                feedback:InitialFeedback
            })
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
}