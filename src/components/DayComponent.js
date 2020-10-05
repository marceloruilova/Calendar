import React, { Component,useState } from 'react';
import {
    Label, Col, Row, Button, Modal, ModalHeader, ModalBody
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { ChromePicker, CirclePicker, SketchPicker } from 'react-color';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const numbers = [30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2];

class ReminderForm extends Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            isModalOpen: false,
            background: '#fff'
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
        this.props.postReminder(this.props.id, values.text, values.day_name, values.day_number, values.month, values.year, values.time, values.city, values.color);
        this.props.resetReminderForm();
    }

    render() {
        //const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
        
        return (
            <div>
                <Button outline onClick={this.toggleModal}><i class="fa fa-plus-square" aria-hidden="true">+</i></Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Reminder</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Label htmlFor="text">Title</Label>
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
                                <Label htmlFor="color">Choose a color</Label>
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
                                    <Label htmlFor="city">Date</Label>
                                    <Control.text
                                        model=".date"
                                        name="date"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(30)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".date"
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
const RenderReminders = (props) => {


}
const Day = (props) => {
    return (
        <div class="container">
            <div className="row">
                {numbers.map((numbers, index) => {
                    //Rendering only multiples of 7 for adding backgroundcolor
                    if (index % 7 == 0) {
                        return (
                            <div className="col-1-5-colored">
                                {numbers}
                                <ReminderForm
                                    reminders={props.reminders}
                                    postReminder={props.postReminder}
                                    resetReminderForm={props.resetReminderForm}
                                />
                            </div>
                        );
                    }
                    //Rendering only Saturday for adding backgroundcolor
                    else if (index == 6 | index == 13 | index == 20 | index == 27 | index == 34) {
                        return (
                            <div className="col-1-5-colored">
                                {numbers}
                                <ReminderForm
                                    reminders={props.reminders.reminders}
                                    postReminder={props.postReminder}
                                    resetReminderForm={props.resetReminderForm}
                                />
                            </div>
                        );
                    }
                    //Rendering the space between Weekends
                    else {
                        return (
                            <div className="col-1-5-uncolored">
                                {numbers}
                                <ReminderForm
                                    reminders={props.reminders.reminders}
                                    postReminder={props.postReminder}
                                    resetReminderForm={props.resetReminderForm}
                                />
                            </div>
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