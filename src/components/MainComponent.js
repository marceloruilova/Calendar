import React, {Component} from 'react';
import Day from './DayComponent';
import Header from "./HeaderComponent";
import Reminder from "./ReminderComponent";


class Main extends Component{

    componentDidMount(){
        
    }
    //Always the same header with the names
    //Easily you can change how it looks
    render(){
        return (
            <div>
                <Header />
                <Day />
            </div>
            /*<Switch>
                    <Route path="/calendario" component={()=><Day days={this.props.days}/>}/>
            </Switch>*/
        )
    }
}
export default Main;