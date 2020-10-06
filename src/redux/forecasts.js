import { actions } from 'react-redux-form';
import * as ActionTypes from './ActionTypes';


export const Forecasts = (state = {
  errMess: null, forecasts: [],loading:false
}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_FORECASTS_REQUEST:
      return { ...state, loading:true};

    case ActionTypes.FETCH_FORECASTS_SUCCESS:
      return { loading:false, forecasts:actions.payload,error: ''};

    case ActionTypes.FETCH_FORECASTS_FAILURE:
      return { loading:false, forecasts:[],error:action.payload };

    default:
      return state;
  }
};