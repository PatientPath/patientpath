import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Scheduling = () => {
    return ( 
        // Appointments Toggle button
        <div className="container main my-3">
             <Link to="/appointments">
                <button type="button" className="btn btn-primary">
                    <FontAwesomeIcon icon={faList} /> Appointments List
                </button>
            </Link>

            <form>
                {/* Radio Buttons */}
                <div class="form-check form-check-inline my-5">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="patient-type"
                        id=""
                        value="{3:option1}"
                    />
                    <label class="form-check-label" htmlFor="">New Patient</label>
                </div>
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="patient-type"
                        id=""
                        value="option2"
                    />
                    <label class="form-check-label" htmlFor="">Existing Patient</label>
                </div>
                
                {/*  Select Patient */}
               
                <div class="mb-3 py-3 px-2 border border-primary rounded">
                    <h4>Patient Information</h4>

                    <label htmlFor="" class="form-label">Patient:</label>
                    <select
                    class="form-select form-select-md"
                    name=""
                    id=""
                    >
                    <option selected>Select...</option>
                    <option value="">New Delhi</option>
                    <option value="">Istanbul</option>
                    <option value="">Jakarta</option>
                    </select>
                </div>

                 {/*  Select Appoint Info */}
                <section class="mb-3 py-3 px-2 border border-primary rounded">
                    <h4>Appointment Information</h4>
                    <div class="mb-3">
                        <label htmFor="" class="form-label">Doctor:</label>
                        <select
                        class="form-select form-select-md"
                        name=""
                        id=""
                        >
                            <option selected>Select...</option>
                            <option value="">New Delhi</option>
                            <option value="">Istanbul</option>
                            <option value="">Jakarta</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label htmlFor="" class="form-label">Date:</label>
                        <select
                        class="form-select form-select-md"
                        name=""
                        id=""
                        >
                            <option selected>Select...</option>
                            <option value="">New Delhi</option>
                            <option value="">Istanbul</option>
                            <option value="">Jakarta</option>
                        </select>
                    </div>
                </section>

                <button
                    type="submit"
                    class="btn btn-primary me-1 "
                >
                    Submit
                </button>

                <button
                    type="reset"
                    class="btn btn-info ms-1"
                >
                    Reset
                </button>
                
            </form>
        </div>
     );
}
 
export default Scheduling;