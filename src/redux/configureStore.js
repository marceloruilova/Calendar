import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Reminders } from './reminders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            reminders: Reminders
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
}