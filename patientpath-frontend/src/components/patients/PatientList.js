import React, { useState } from 'react';

const PatientList = ({ patients }) => {
    const [numPerPage, setNumPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

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

    const totalPages = Math.ceil(patients.length / numPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const visiblePatients = patients.slice(
        (currentPage - 1) * numPerPage,
        currentPage * numPerPage
    );

    return (
        <div className="container main mt-5">
            {/* Navigation Tabs */}
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                    >
                        Patients
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                    >
                        + Add Patient
                    </button>
                </li>
            </ul>

            {/* View Options Dropdown */}
            <div className="mb-3 d-flex flex-row-reverse">
                <label htmlFor="viewOption" className="form-label"></label>
                <select
                    id="viewOption"
                    className="w-auto form-select"
                    value={numPerPage === patients.length ? "all" : "10"}
                    onChange={handleViewOptionChange}
                >
                    <option value="10">View 10</option>
                    <option value="all">View All</option>
                </select>
            </div>

            {/* Pagination Buttons */}
            {totalPages > 1 && (
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
                    Add a patient
                </div>
            </div>
        </div>
    );
};

export default PatientList;
