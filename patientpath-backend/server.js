const express = require('express');
const app = express();
const patients = require('../patientpath-frontend/public/patients.json')
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Patient Path Root')
});

app.get('/api/patients', (req, res) => {
    res.send(patients)
});

app.get('/api/patients/:id', (req, res) => {
    const singlePatient = patients.find((p) => p.patientId === req.params.id)

    res.send(singlePatient)
});


app.listen(PORT, () => console.log(`Server Listening at PORT ${PORT}`))