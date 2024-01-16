import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = (props) => {
    console.log(props.getEvents)

    return ( 
        <div className="container">
            <section>
                <FullCalendar 
                    plugins={[ dayGridPlugin ]} initialView="dayGridMonth"
                    events={props.getEvents}
                />
            </section>
        </div>
     );
}
 
export default Calendar;