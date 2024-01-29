import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';

const Appointments = () => {
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
                        <th>Column 1</th>
                        <th>Column 2</th>
                        <th>Column 3</th>
                        <th>Column 4</th>
                        <th>Column 5</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    <tr
                        className="table-primary"
                    >
                        <td scope="row">Item</td>
                        <td>Item</td>
                        <td>Item</td>
                        <td>Item</td>
                        <td>Item</td>
                    </tr>
                    <tr
                        className="table-primary"
                    >
                        <td scope="row">Item</td>
                        <td>Item</td>
                        <td>Item</td>
                        <td>Item</td>
                        <td>Item</td>
                    </tr>
                    <tr
                        className="table-primary"
                    >
                        <td scope="row">Item</td>
                        <td>Item</td>
                        <td>Item</td>
                        <td>Item</td>
                        <td>Item</td>
                    </tr>
                    <tr
                        className="table-primary"
                    >
                        <td scope="row">Item</td>
                        <td>Item</td>
                        <td>Item</td>
                        <td>Item</td>
                        <td>Item</td>
                    </tr>
                    <tr
                        className="table-primary"
                    >
                        <td scope="row">Item</td>
                        <td>Item</td>
                        <td>Item</td>
                        <td>Item</td>
                        <td>Item</td>
                    </tr>
                </tbody>
                <tfoot>
                    
                </tfoot>
            </table>
            <Outlet/>
        </div>
        
     );
}
 
export default Appointments;