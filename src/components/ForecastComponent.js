import React, { Component } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody
} from 'reactstrap';
import axios from 'axios';

class Forecast extends Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            isModalOpen: false,
        }
    }
    componentDidMount(){
        
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {

        return(
        <div>
            <Button outline onClick={this.toggleModal}><span aria-hidden="true">Weather</span></Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Weather</ModalHeader>
                <ModalBody>
                    <center><h1>Weather List</h1></center>
                    {this.props.forecasts.map((forecasts) => (
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{forecasts.name}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{forecasts.main.temp}</h6>
                                <p class="card-text">{forecasts.weather.description}</p>
                            </div>
                        </div>
                    ))}
                </ModalBody>
            </Modal>
        </div>);
    }
}


export default Forecast;