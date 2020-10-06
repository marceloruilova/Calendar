import * as ActionTypes from './ActionTypes';

export const Reminders = (state = {
  errMess: null, reminders: []
}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_REMINDERS:
      return { ...state, errMess: null, reminders: action.payload };

    case ActionTypes.REMINDERS_FAILED:
      return { ...state, errMess: action.payload };

    case ActionTypes.ADD_REMINDER:
      var reminder = action.payload;
      return { ...state, reminders: state.reminders.concat(reminder) };

    default:
      return state;
  }
};