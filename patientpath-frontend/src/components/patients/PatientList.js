import React, { useState } from 'react';
import AddPatientForm from './AddPatientForm';

const PatientList = ({ patients }) => {
    const [numPerPage, setNumPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [activeTab, setActiveTab] = useState('patients');


    const handleViewOptionChange = (e) => {
        const value = e.target.value;
        if (value === "10") {
            setNumPerPage(10);
            setCurrentPage(1);
        } else if (value === "all") {
            setNumPerPage(patients.length);
            setCurrentPage(1);
        }
    };

    const updateSelection = (value) => {
        document.getElementById('viewOption').value = value;
        handleViewOptionChange({ target: { value } });
    };
    
    const totalPages = Math.ceil(patients.length / numPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const visiblePatients = patients.slice(
        (currentPage - 1) * numPerPage,
        currentPage * numPerPage
    );

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="container main mt-5">
            {/* Navigation Tabs */}
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                <button
                    className={`nav-link ${activeTab === 'patients' ? 'active' : ''}`}
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected={activeTab === 'patients'}
                    onClick={() => handleTabChange('patients')}
                >
                        Patients
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                <button
                    className={`nav-link ${activeTab === 'addPatient' ? 'active' : ''}`}
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected={activeTab === 'addPatient'}
                    onClick={() => handleTabChange('addPatient')}
                >
                        + Add Patient
                    </button>
                </li>
            </ul>

            {/* View Options Dropdown */}
            {activeTab === 'patients' && (
            <div className="mb-3 d-flex flex-row-reverse">
                <label htmlFor="viewOption" className="form-label"></label>
                <div className="dropdown">
                    <button className="btn btn m-2 border dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {numPerPage === patients.length ? "View All" : "View 10"}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" onClick={() => updateSelection("10")}>View 10</a></li>
                        <li><a className="dropdown-item" onClick={() => updateSelection("all")}>View All</a></li>
                    </ul>
                </div>
                <select
                    id="viewOption"
                    className="d-none"
                    value={numPerPage === patients.length ? "all" : "10"}
                    onChange={handleViewOptionChange}
                >
                    <option value="10">View 10</option>
                    <option value="all">View All</option>
                </select>
            </div>
            )}

            {/* Pagination Buttons */}
            {activeTab === 'patients' && totalPages > 1 && (
                <nav>
                    <ul className="pagination justify-content-center">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <li
                                key={index}
                                className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

            {/* Table */}
            <div className="tab-content">
                <div
                    className="tab-pane active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                >
                    <div className="table-responsive">
                        <table className="table table-primary">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {visiblePatients.map((patient) => (
                                    <tr key={patient.patientId}>
                                        <td>{patient.name}</td>
                                        <td>{patient.contact.phone}</td>
                                        <td>{patient.contact.email}</td>
                                        <td>{`${patient.address.street}, ${patient.address.city}, ${patient.address.state}, ${patient.address.zip}`}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div
                    className="tab-pane"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                >
                    <AddPatientForm />
                </div>
            </div>
        </div>
    );
};

export default PatientList;