import React, { Component, useState } from 'react';
import {
    Label, Col, Row, Button, Modal, ModalHeader, ModalBody
} from 'reactstrap';
//import Forecast from './ForecastComponent';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { ChromePicker, CirclePicker, SketchPicker } from 'react-color';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
//const maxNumber = (val) => val > 0 || val < 32;

const numbers = [30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2];

class ReminderForm extends Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            isModalOpen: false,
            background: '#fff',
        }
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.postReminder(this.props.id, values.text, values.day_name, values.day_number, values.month, values.year, values.time,values.reminder_day,values.reminder_number, values.city, values.color);
        this.props.resetReminderForm();
    }

    render() {
        //const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);

        return (
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-plus-square" aria-hidden="true"></span></Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Reminder</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Label htmlFor="text">Text</Label>
                                    <Control.text
                                        model=".text"
                                        name="text"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(30)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".text"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Label htmlFor="city">Ciudad</Label>
                                    <Control.text
                                        model=".city"
                                        name="city"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(30)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".city"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Label htmlFor="reminder_number">Write number 1-30</Label>
                                    <Control.text
                                        model=".reminder_number"
                                        name="reminder_number"
                                        className="form-control"
                                        validators={{
                                            required,isNumber/*,maxNumber*/
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".reminder_number"
                                        show="touched"
                                        messages={{
                                            required: ' Required ',
                                            //maxNumber: ' The range of days is 1-31',
                                            isNumber: ' You must add a number'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Label htmlFor="reminder_day">Reminder Day</Label>
                                    <Control.select model=".reminder_day" name="reminder_day"
                                        className="form-control">
                                        <option>Sunday</option>
                                        <option>Monday</option>
                                        <option>Tuesday</option>
                                        <option>Wednesday</option>
                                        <option>Thursday</option>
                                        <option>Friday</option>
                                        <option>Saturday</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Label htmlFor="color">Write a color</Label>
                                    <Control.text
                                        model=".color"
                                        name="color"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(30)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".color"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
class ShowReminders extends Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            isModalOpen: false,
            background: '#fff',
        }
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.postReminder(this.props.id, values.text, values.day_name, values.day_number, values.month, values.year, values.time,values.reminder_day,values.reminder_number, values.city, values.color);
        this.props.resetReminderForm();
    }

    render() {
        //const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
        
        return (
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-book"></span></Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Reminders</ModalHeader>
                    <ModalBody>
                        <ul className="list-unnstyled" >
                            {this.props.reminders.map((reminder) => {
                                return (
                                    <li key={reminder.id} >
                                        <h4>{reminder.reminder_day} {reminder.reminder_number}th {reminder.year} </h4>
                                        <p>-- {reminder.text} </p>
                                        <p>-- {reminder.city} </p>
                                        <p>-- {reminder.time} </p>
                                    </li>
                                );
                            })}
                        </ul>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
const Day = (props) => {
    return (
        <div className="container">
            <div className="row">
                {numbers.map((number, index) => {
                    //Rendering only multiples of 7 for adding backgroundcolor
                    if (index % 7 === 0) {
                        return (
                            <div className="col-1-5-colored" key={number.toString()}>
                                {number}
                                <ReminderForm
                                    reminders={props.reminders}
                                    postReminder={props.postReminder}
                                    resetReminderForm={props.resetReminderForm}
                                />
                                <ShowReminders
                                    reminders={props.reminders}
                                />
                            </div>
                               // <Forecast forecasts={props.forecasts}/>
                                
                        );
                    }
                    //Rendering only Saturday for adding backgroundcolor
                    else if (index === 6 | index === 13 | index === 20 | index === 27 | index === 34) {
                        return (
                            <div className="col-1-5-colored" key={number.toString()}>
                                {number}
                                <ReminderForm
                                    reminders={props.reminders.reminders}
                                    postReminder={props.postReminder}
                                    resetReminderForm={props.resetReminderForm}
                                />
                                <ShowReminders
                                    reminders={props.reminders}
                                />
                            </div>
                            //<Forecast forecasts={props.forecasts}/>
                        );
                    }
                    //Rendering the space between Weekends
                    else {
                        return (
                            <div className="col-1-5-uncolored" key={number.toString()}>
                                {number}
                                <ReminderForm
                                    reminders={props.reminders.reminders}
                                    postReminder={props.postReminder}
                                    resetReminderForm={props.resetReminderForm}
                                />
                                <ShowReminders
                                    reminders={props.reminders}
                                />

                            </div>
                            //<Forecast forecasts={props.forecasts}/>
                        );
                    }
                })}
            </div>
            <div>
            </div>
        </div>
    );
}

export default Day;