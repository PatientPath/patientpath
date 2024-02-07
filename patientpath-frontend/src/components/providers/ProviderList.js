import React, { useState } from 'react';
import AddProviderForm from './AddProviderForm';

const ProviderList = ({ providers }) => {
    const [numPerPage, setNumPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [activeTab, setActiveTab] = useState('providers');
    const [viewOption, setViewOption] = useState('10');

    const handleViewOptionChange = (e) => {
        const value = e.target.value;
        setNumPerPage(value === "10" ? 10 : providers.length);
        setCurrentPage(1);
        setViewOption(value);
    };

    const totalPages = Math.ceil(providers.length / numPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const visibleProviders = providers.slice(
        (currentPage - 1) * numPerPage,
        currentPage * numPerPage
    );

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="container main mt-5">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 'providers' ? 'active' : ''}`}
                        id="providers-tab"
                        type="button"
                        role="tab"
                        aria-controls="providers"
                        aria-selected={activeTab === 'providers'}
                        onClick={() => handleTabChange('providers')}
                    >
                        Providers
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 'addProvider' ? 'active' : ''}`}
                        id="add-provider-tab"
                        type="button"
                        role="tab"
                        aria-controls="addProvider"
                        aria-selected={activeTab === 'addProvider'}
                        onClick={() => handleTabChange('addProvider')}
                    >
                        + Add Provider
                    </button>
                </li>
            </ul>

            {activeTab === 'providers' && (
                <div className="mb-3 d-flex flex-row-reverse">
                    <div className="dropdown">
                        <button className="btn btn m-2 border dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            {numPerPage === providers.length ? "View All" : "View 10"}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <button className="dropdown-item" onClick={() => handleViewOptionChange({ target: { value: "10" } })}>View 10</button>
                        </li>
                        <li>
                            <button className="dropdown-item" onClick={() => handleViewOptionChange({ target: { value: "all" } })}>View All</button>
                        </li>
                        </ul>
                    </div>
                </div>
            )}

            {activeTab === 'providers' && totalPages > 1 && (
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

            <div className="tab-content">
                <div
                    className={`tab-pane ${activeTab === 'providers' ? 'active' : ''}`}
                    id="providers"
                    role="tabpanel"
                    aria-labelledby="providers-tab"
                >
                    <div className="table-responsive">
                        <table className="table table-primary">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Specialization</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {visibleProviders.map((provider) => (
                                    <tr key={provider.providerId}>
                                        <td>{provider.name}</td>
                                        <td>{provider.specialization}</td>
                                        <td>{provider.contact.phone}</td>
                                        <td>{provider.contact.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div
                    className={`tab-pane ${activeTab === 'addProvider' ? 'active' : ''}`}
                    id="addProvider"
                    role="tabpanel"
                    aria-labelledby="add-provider-tab"
                >
                    <AddProviderForm />
                </div>
            </div>
        </div>
    );
}

export default ProviderList;
