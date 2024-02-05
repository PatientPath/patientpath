import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';

const Appointments = (props) => {
    console.log(props.getEvents)
    return ( 
        <div
            className="container table-responsive main mt-5"
        >
            <Link to="scheduling">
                <button type="button" className="btn btn-primary mb-5">
                    <FontAwesomeIcon icon={faList} /> Add Appointment
                </button>
            </Link>

            <table
                className="table table-striped table-hover table-borderless table-primary align-middle"
            >
                <thead className="table-light">
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Start</th>
                        <th>Duration (min)</th>
                        <th>Reason</th>
                        <th>Provider</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {props.getEvents.map(event => (
                        <tr className="table-primary">
                            <td>{event.title}</td>
                            <td>{new Date(event.start).toString().split(" ").splice(0,4).join(" ")}</td>
                            <td>{new Date(event.start).toLocaleTimeString()}</td>
                            <td>{(new Date(event.end).getTime() - new Date(event.start).getTime())/60000}</td>
                            <td>{event.reason}</td>
                            <td>{event.provider}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    
                </tfoot>
            </table>
            <Outlet/>
        </div>
        
     );
}
 
export default Appointments;