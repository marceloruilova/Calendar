import React, { Component } from 'react';
import Day from './DayComponent';
import Header from "./HeaderComponent";
import { connect } from 'react-redux';
import { postReminder, fetchReminders, fetchForecasts } from '../redux/ActionCreators';
import {actions} from 'react-redux-form';

const mapStateToProps = state => {
  return {
    reminders: state.reminders,
    forecasts:state.forecasts
  }
}

const mapDispatchToProps = dispatch => ({
  postReminder: (dayId, text, day_name,day_number, month, year, time, city, color) => dispatch(postReminder(dayId, text, day_name,day_number, month, year, time, city, color)),
  fetchReminders: () => { dispatch(fetchReminders()) },
  resetReminderForm: ()=>{dispatch(actions.reset('reminder'))},
  fetchForecasts:() => { dispatch(fetchForecasts()) }
});


class Main extends Component {

  constructor(props){
    super(props);

  }
  componentDidMount(){
    this.props.fetchReminders();
    this.props.fetchForecasts();
  }
  //Always the same header with the names
  //Easily you can change how it looks
  render() {
debugger
    return (
      
      <div>
        <Header />
        
        <Day
          reminders={this.props.reminders.reminders}
          forecasts={this.props.forecasts.forecasts}
          postReminder={this.props.postReminder}
          resetReminderForm={this.props.resetReminderForm}
        />
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);