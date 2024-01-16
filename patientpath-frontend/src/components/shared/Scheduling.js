import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


const Scheduling = (props) => {
    const [ patientType, setPatientType ] = useState('');
    const [ patientName, setPatientName ] = useState('');
    const [ providerName, setProviderName ] = useState('');
    const [date, setDate] = useState('');
    const [ events, setEvents ] = props.updateEvents;

    console.log(patientType, patientName, providerName, date)


    const submitHandler = (e) => {
        e.preventDefault();  
        setEvents([...events, {
            id: 2,
            title: {patientName},
            start: {date}
        }])
        
          
        console.log([patientType, patientName, providerName, date])
   }

    return ( 
        // Appointments Toggle button
        <div className="container main my-3">
             <Link to="/appointments">
                <button type="button" className="btn btn-primary">
                    <FontAwesomeIcon icon={faList} /> Appointments List
                </button>
            </Link>

            <form  onSubmit={submitHandler}>
                {/* Radio Buttons */}
                <div className="form-check form-check-inline my-5">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="patient_type"
                        id="patient_type"
                        value="new patient"
                        onChange={e=>setPatientType(e.target.value)}
                        required
                    />
                    <label className="form-check-label" htmlFor="">New Patient</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="patient_type"
                        id="patient_type"
                        value="existing patient"
                    />
                    <label className="form-check-label" htmlFor="">Existing Patient</label>
                </div>
                
                {/*  Select Patient */}
               
                <div className="mb-3 py-3 px-2 border border-primary rounded w-75">
                    <h4>Patient Information</h4>

                    <label htmlFor="" className="form-label">Patient:</label>
                    <select
                    className="form-select form-select-md"
                    name="patientName"
                    id="patientName"
                    defaultValue={"default"}
                    onChange={e=>setPatientName(e.target.value)}
                    >
                    <option value="default">Select...</option>
                    <option value="Jane Doe">Jane Doe</option>
                    <option value="Jeff Doe">Jeff Doe</option>
                    <option value="Jerry Doe">Jerry Doe</option>
                    </select>
                </div>

                 {/*  Select Appoint Info */}
                <section className="mb-3 py-3 px-2 border border-primary rounded w-75">
                    <h4>Appointment Information</h4>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Doctor:</label>
                        <select
                        className="form-select form-select-md"
                        name="providerName"
                        id="providerName"
                        defaultValue={'default'}
                        onChange={e=>setProviderName(e.target.value)}
                        >
                            <option value={'default'}>Select...</option>
                            <option value="Dr. Joe Doe">Dr. Jane Doe</option>
                            <option value="Dr. John Doe">Dr. John Doe</option>
                            <option value="Dr. Jenny Doe">Dr. Jenny Doe</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <>
                            <label htmlFor="" className="form-label">Date: </label>
                            <input id="date_time" name="date_time" type="datetime-local" onChange={e=>setDate(e.target.value)}
                            />
                            {/* <span className="text-danger">{}</span> */}
                        </>
                    </div>
                </section>

                <button
                    type="submit"
                    className="btn btn-primary me-1"
                >
                    Submit
                </button>

                <button
                    type="reset"
                    className="btn btn-info ms-1"
                >
                    Reset
                </button>
                
            </form>
        </div>
     );
}
 
export default Scheduling;