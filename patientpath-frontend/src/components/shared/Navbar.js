import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faHouseMedical } from '@fortawesome/free-solid-svg-icons';
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect  } from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(true);
    

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 800 && toggle){
                setToggle(false);
                document.querySelector('body').classList.toggle('active');
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [toggle])


    const clickHandler = () => {
        setToggle(!toggle);
        document.querySelector('body').classList.toggle('active');
    }

    return ( 
        <div className="wrapper">
        
            <div className="sidebar" style={{display: toggle ? 'block' : 'none'}}>
                {/* Profile image */}
                <div className="profile">
                    <FontAwesomeIcon icon={faCircleUser} size="6x" color="white" />
                    <h3>User</h3>
                    <p>Admin</p>
                </div>
                <br></br>

                <ul>
                    <li><Link to="/admin" className="active">
                        <span className="icon"><FontAwesomeIcon icon={faHouseMedical} size='lg' /></span>
                        <span className="item"></span>Home</Link></li>
                    <li><Link to="/patients">
                        <span className="icon"><FontAwesomeIcon icon={faHospitalUser} size='lg' /></span>
                        <span className="item"></span>Patients</Link></li>
                    <li><Link to="/providers">
                        <span className="icon"><FontAwesomeIcon icon={faUserDoctor} size='lg' /></span>
                        <span className="item"></span>Doctors</Link></li>
                    <li><Link to="/dashboard">
                        <span className="icon"><FontAwesomeIcon icon={faChartLine} size='lg' /></span>
                        <span className="item"></span>Dashboard</Link></li>
                    <li><Link to="/appointments">
                        <span className="icon"><FontAwesomeIcon icon={faCalendarDays} size='lg' /></span>
                        <span className="item"></span>Appointments</Link></li>
                    <li><Link to="/notifications">
                        <span className="icon"><FontAwesomeIcon icon={faBell} size='lg' /></span>
                        <span className="item"></span>Notifications</Link></li>
                    <br></br>
                    <br></br>
                    <li><Link to="/">
                        <span className="icon"><FontAwesomeIcon icon={faRightFromBracket} size='lg' /></span>
                        <span className="item"></span>Log out</Link></li>
                </ul>
            </div>

        <div className="section">
            <div className="top_navbar">
                <button className="hamburger" onClick={clickHandler} type="button">
                    <FontAwesomeIcon icon={faBars} className="menu-btn"/>
                </button>
            </div>
        </div>
      
        </div>
    );
}

 
export default Navbar;