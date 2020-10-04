import React, { Component } from 'react';

var numbers = [30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2]

class Day extends Component {
    constructor() {
        super();
        this.showMenu = this.showMenu.bind(this);
        this.state = {
            showMenu: false,
        }
    }
    
    showMenu(event) {
        event.preventDefault();
        this.setState({
            showMenu: !this.state.showMenu,
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                {numbers.map((numbers, index) => {
                    //Rendering only multiples of 7 for adding backgroundcolor
                    if (index % 7 == 0) {
                        return (
                            <div className="col-1-5-colored">
                                {numbers}
                                <button onClick={(e) => this.deleteRow(id, e)}>
                                    <span className="fa fa-plus-square"></span>
                                </button>

                                {
                                    this.state.showMenu
                                        ? (
                                            <div className="menu">
                                                <button> Add </button>
                                                <button> Edit </button>
                                            </div>
                                        )
                                        : (
                                            null
                                        )
                                }
                            </div>

                        );
                    }
                    //Rendering only Saturday for adding backgroundcolor
                    else if (index == 6 | index == 13 | index == 20 | index == 27 | index == 34) {
                        return (
                            <div className="col-1-5-colored">
                                {numbers}
                                <button onClick={(e) => this.deleteRow(id, e)}>
                                        <span className="fa fa-plus-square"></span>
                                </button>

                                {
                                    this.state.showMenu
                                        ? (
                                            <div className="menu">
                                                <button> Add </button>
                                                <button> Edit </button>
                                            </div>
                                        )
                                        : (
                                            null
                                        )
                                }
                            </div>
                        );
                    }
                    //Rendering the space between Weekends
                    else {
                        return (
                                <div className="col-1-5-colored">
                                    {numbers}
                                    <button onClick={(e) => this.deleteRow(id, e)}>
                                        <span className="fa fa-plus-square"></span>
                                    </button>
                                    {
                                        this.state.showMenu
                                            ? (
                                                <div className="menu">
                                                    <button> Add </button>
                                                    <button> Edit </button>
                                                </div>
                                            )
                                            : (
                                                null
                                            )
                                    }
                                </div>
                        );
                    }
                })}
                </div>
            </div>
        );
    }
}

export default Day;