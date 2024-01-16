import Calendar from '../shared/Calendar';

const AdminScreen = (props) => {
    return ( 
        <div className='main'>
             {/* Cards */}
            <section className="container displayCards">
                <div className="d-flex row mt-5 justify-content-center">
                    <div className="col-4 h-50">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Title</h3>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Title</h3>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Title</h3>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Calendar */}
            <section className="mt-5">
                <Calendar getEvents={props.getEvents}/>
            </section>
        </div>
     );
}
 
export default AdminScreen;