import React from 'react';
var numbers = [30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2]
const RenderDays = () => {
    /*var today = new Date(),
        date = today.toUTCString().replace(',', '').split(' ');
    var day=parseInt(date[1].substr(1,2));
    var numbersascendent = [];
    var numbersdescendent = [];
    var limite=day+(32-day);
    var i=0;
    for (i = 1; i < limite; i++) {
        numbersascendent.push(i);
        if(i==limite){
            break;
        }
    }
    debugger
    for (i = day; i>0; i--) {
        if(i==0){
            i=30;
        }
        numbersdescendent.push(i);
    }
*/


    return (
        <div className="container">
            <div className="row">
                {numbers.map((numbers,index) => {
                    if (index % 7 == 0) {
                        return (
                            <div className="col-1-5-colored">
                                <p>{numbers}</p>
                            </div>
                        );
                    }
                    else if (index == 6|index==13|index==20|index==27|index==34) {
                        return (
                            <div className="col-1-5-colored">
                                <p>{numbers}</p>
                            </div>
                        );
                    }
                    else {
                        return (
                            <div className="col-1-5-uncolored">
                                <p>{numbers}</p>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

const Day = () => {
    return (<RenderDays />);
}

export default Day;