import React from 'react';


var daystring = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

const Header=()=>{
    return(
        <div className="container">
            <div className="row row-days">
                {daystring.map((daystring)=>{return(
                    <div className="col-md">{daystring}</div>);})}
            </div>
        </div>
        );
};

export default Header;