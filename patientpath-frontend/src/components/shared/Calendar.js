import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import React from 'react';

const Calendar = (props) => {
    // console.log(props.getEvent)
    // console.log("Calendar", new Event(props.getEvent))
    const updateEvents = () => [...props.getEvents, new Event(props.getEvent).props]
   
    return ( 
        <div className="container">
            <section>
                <FullCalendar
                    plugins={[ dayGridPlugin ]} initialView="dayGridMonth"
                    events={updateEvents()}
                />
            </section>
        </div>
     );
}

class Event extends React.Component {
    constructor(props){
        super(props)
        this.state = {id: props.id,
        title: props.title, start: props.start}
    }
    render(){
        return null
    }
}
 
export default Calendar;