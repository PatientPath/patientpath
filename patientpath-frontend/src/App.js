import AdminScreen from "./components/admin/AdminScreen";
import Navbar from "./components/shared/Navbar";
import { Routes, Route } from 'react-router-dom'
import ProviderList from "./components/providers/ProviderList";
import PatientList from "./components/patients/PatientList";
import Appointments from "./components/shared/Appoinments";
import Scheduling from "./components/shared/Scheduling";
import Dashboard from "./components/shared/Dashboard";
import Notifications from "./components/shared/Notifications";
import React, { useState, useEffect } from 'react';

function App() {
  const [ events, setEvents ] = useState( [{
        id: 1,
        title: "Sam Cooke",
        start: "2024-01-17T03:30:00"
      }]);

  return (
    <div>
      {/* <h1>Patient Path</h1> */}
      <Navbar/>
      <Routes>
        <Route path="/admin" element={<AdminScreen getEvents={events}/>}/>
        <Route path="/providers" element={<ProviderList />}/>
        <Route path="/patients" element={<PatientList />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/appointments"> 
          <Route index path="/appointments" element={<Appointments/> }/>
          <Route path="scheduling" element={<Scheduling updateEvents={[events, setEvents]}/> }/>
        </Route>
        <Route path="/notifications" element={<Notifications />}/>
      </Routes>
    </div>
  );
}

export default App;
