import React, {useState } from 'react';

const DateTimePicker = () => {
    const [date, setDate] = useState();
    const [time, setTime ] = useState();

    console.log("date", date)

    return ( 
        <>
        <label htmFor="" class="form-label">Date: </label>
        <input id="date_time" type="datetime-local" onChange={e=>setDate(e.target.value)}/>
        <span className="text-danger">{date}</span>
        </>
     );
}
 
export default DateTimePicker;