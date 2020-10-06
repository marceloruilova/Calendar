import * as ActionTypes from './ActionTypes';

export const Forecasts = (state = {
  errMess: null, forecasts: []
}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FORECASTS:
      return { ...state, errMess: null, forecasts: action.payload };

    case ActionTypes.FORECASTS_FAILED:
      return { ...state, errMess: action.payload };

    case ActionTypes.ADD_FORECAST:
      var forecast = action.payload;
      return { ...state, forecasts: state.forecasts.concat(forecast) };

    default:
      return state;
  }
};