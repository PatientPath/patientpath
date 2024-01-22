import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import React, { useEffect, useRef } from 'react';

const Calendar = (props) => {
    // const calendarRef = useRef();
    // const calendar =  calendarRef.current.calendar
     
   
    return ( 
        <div className="container">
            {/* {props.getEvents[0].start.date} */}
            <section>
                <FullCalendar
                    // ref={calendarRef} 
                    plugins={[ dayGridPlugin ]} initialView="dayGridMonth"
                    events={props.getEvents}
                />
            </section>
        </div>
     );
}
 
export default Calendar;