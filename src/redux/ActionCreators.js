import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const postReminder = (id, text, day_name,day_number, month,year, time, city, color) => (dispatch) => {
    const newReminder = {
        id: id,
        text: text,
        day_name: day_name,
        day_number:day_number,
        month:month,
        year:year,
        time: time,
        city:city,
        color:color
    };
    const date = new Date().toUTCString().replace(',','').split(' ');
    newReminder.day_name=date[0];
    newReminder.day_number=date[1];
    newReminder.month=date[2];
    newReminder.year=date[3];
    newReminder.time=date[4];

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

export const remindersFailed = (errmess) => ({
    type: ActionTypes.REMINDERS_FAILED,
    payload: errmess
});
export const addReminder = (reminders) => ({
    type: ActionTypes.ADD_REMINDERS,
    payload: reminders
});
export const addReminders = (reminders) => ({
    type: ActionTypes.ADD_REMINDERS,
    payload: reminders
});
  