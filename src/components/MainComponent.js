import React, { Component } from 'react';
import Day from './DayComponent';
import Header from "./HeaderComponent";
import { connect } from 'react-redux';
import { postReminder, fetchReminders } from '../redux/ActionCreators';
import {actions} from 'react-redux-form';

const mapStateToProps = state => {
  return {
    reminders: state.reminders,
  }
}

const mapDispatchToProps = dispatch => ({
  postReminder: (dayId, text, day_name,day_number, month, year, time, city, color) => dispatch(postReminder(dayId, text, day_name,day_number, month, year, time, city, color)),
  fetchReminders: () => { dispatch(fetchReminders()) },
  //fetchDays: () => dispatch(fetchDays()),
  resetReminderForm: ()=>{dispatch(actions.reset('reminder'))}
});


class Main extends Component {

  /*componentDidMount() {
    this.props.fetchDays();
  }*/
  //Always the same header with the names
  //Easily you can change how it looks
  render() {
    return (
      <div>
        <Header />
        <Day
          reminders={this.props.reminders.reminders}
          postReminder={this.props.postReminder}
          resetReminderForm={this.props.resetReminderForm}
        />
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);