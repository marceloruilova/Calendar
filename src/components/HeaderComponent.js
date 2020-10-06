import React from 'react';


var daystrings = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Header=()=>{
    return(
        <div className="container">
            <div className="row row-days">
                {daystrings.map((daystring)=>{return(
                    <div className="col-md" key={daystring}>{daystring}</div>);})}
            </div>
        </div>
        );
};

export default Header;