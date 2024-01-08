import { Link } from 'react-router-dom';

const AdminScreen = () => {
    return ( 
        <div className='main displayCards'>
            <div className="d-flex row mt-5 justify-content-center">
                <div className="col-3 h-50">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Title</h3>
                            <p className="card-text">Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Title</h3>
                            <p className="card-text">Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Title</h3>
                            <p className="card-text">Text</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AdminScreen;