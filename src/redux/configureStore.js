import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Reminders } from './reminders';
//import { Forecasts } from './forecasts';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            reminders: Reminders,
            //forescasts:Forecasts
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
}