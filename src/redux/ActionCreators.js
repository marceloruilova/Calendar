import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const postReminder = (dayId, text, day, month, time, city, color,year) => (dispatch) => {

    const newReminder = {
        dayId: dishId,
        text: text,
        day: day,
        month:month,
        year:year,
        time: time,
        city:city,
        color:color
    };
    date = new Date().toUTCString().replace(',','').split(' ');
    newReminder.day=date[0];
    newReminder.day=date[1];
    newReminder.day=date[2];

    return fetch(baseUrl + 'reminders', {
        method: "POST",
        body: JSON.stringify(newReminder),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => dispatch(addReminder(response)))
        .catch(error => {
            console.log('Post reminders', error.message);
            alert('Your reminder could not be posted\nError: ' + error.message);
        });
};

export const fetchReminders = () => (dispatch) => {
    return fetch(baseUrl + 'reminders')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(reminders => dispatch(addReminders(reminders)))
        .catch(error => dispatch(remindersFailed(error.message)));
};
export const addReminder = (remminder) => ({
    type: ActionTypes.ADD_REMINDER,
    payload: reminder
});
export const remindersFailed = (errmess) => ({
    type: ActionTypes.REMINDERS_FAILED,
    payload: errmess
});
export const addReminders = (reminders) => ({
    type: ActionTypes.ADD_REMINDERS,
    payload: reminders
});

export const fetchDays = () => (dispatch) => {//thunk porque retorna una funcion  que contiene una inner función

    dispatch(daysLoading(true));

    return fetch(baseUrl + 'days')
        .then(response => response.json())
        .then(days => dispatch(addDays(days)));
}

export const daysLoading = () => ({
    type: ActionTypes.DAYS_LOADING
});

export const daysFailed = (errmess) => ({
    type: ActionTypes.DAYS_FAILED,
    payload: errmess
});

export const addDays = (days) => ({
    type: ActionTypes.ADD_DAYS,
    payload: days
});
