const PatientList = () => {
    return ( 
        <div className="container main mt-5">
            {/* <!-- Nav tabs --> */}
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
            
            {/* <!-- Tab panes --> */}
            <div className="tab-content">
                <div
                    className="tab-pane active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                >
                    <div
                        className="table-responsive"
                    >
                        <table
                            className="table table-primary"
                        >
                            <thead>
                                <tr>
                                    <th scope="col">Column 1</th>
                                    <th scope="col">Column 2</th>
                                    <th scope="col">Column 3</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="">
                                    <td scope="row">R1C1</td>
                                    <td>R1C2</td>
                                    <td>R1C3</td>
                                </tr>
                                <tr className="">
                                    <td scope="row">Item</td>
                                    <td>Item</td>
                                    <td>Item</td>
                                </tr>
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
                     Add a provider 
                </div>
            </div>
        </div>
     );
}
 
export default PatientList;