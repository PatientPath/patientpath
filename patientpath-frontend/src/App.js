import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminScreen from "./components/admin/AdminScreen";
import Navbar from "./components/shared/Navbar";
import ProviderList from "./components/providers/ProviderList";
import PatientList from "./components/patients/PatientList";
import Appointments from "./components/shared/Appoinments";
import Scheduling from "./components/shared/Scheduling";
import Dashboard from "./components/shared/Dashboard";
import Notifications from "./components/shared/Notifications";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/shared/Home";

function App() {
  const [patients, setPatients] = useState([]);
  const [providers, setProviders] = useState([]); 
  const [ events, setEvents ] = useState([{
        id: 1,
        title: "Sam Cooke",
        start: "2024-01-17T03:30:00"
      }]);
  const [ event, setEvent ] = useState({})


  useEffect(() => {
    // Fetch patients
    fetch('/patients.json')
      .then(response => response.json())
      .then(data => setPatients(data))
      .catch(error => console.error('Error fetching patients data:', error));

    // Fetch providers
    fetch('/providers.json')
      .then(response => response.json())
      .then(data => setProviders(data))
      .catch(error => console.error('Error fetching providers data:', error));
  }, []);

  useEffect(() => {
    fetch('/events.json')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events data:', error));
  }, []);

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminScreen getEvents={events} getEvent={event}/>}/>
        <Route path="/providers" element={<ProviderList />}/>
        <Route path="/admin" element={<AdminScreen getEvents={events}/>}/>
        <Route path="/providers" element={<ProviderList providers={providers} />}/>
        <Route path="/patients" element={<PatientList patients={patients} />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/appointments"> 
          <Route index path="/appointments" element={<Appointments getEvents={events}/> }/>
          <Route path="scheduling" element={<Scheduling updateEvents={[events, setEvents]} updateEvent={[event, setEvent]}/> }/>
          <Route index element={<Appointments/> }/>
          <Route path="scheduling" element={<Scheduling updateEvents={[events, setEvents]}/> }/>
        </Route>
        <Route path="/notifications" element={<Notifications />}/>
      </Routes>
    </div>
  );
}

export default App;
