// app.js
const express = require('express');
const mysql = require('mysql2');
const app = express();
const puerto = 3000;

const testRoutes = require('./routes/testRoutes');
const crudRoutesCustomer = require('./routes/crudRoutesCustomer');
const crudPet = require('./routes/crudPet');
const crudProfessional = require('./routes/crudProfessional');
const crudCategory = require('./routes/crudCategory');
const crudRace = require('./routes/crudRace')
const crudService = require('./routes/crudService')
const crudSpecie = require('./routes/crudSpecie')
const crudState = require('./routes/crudState')
const crudApointment = require('./routes/crudApointment')



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0828',
    database: 'vetsos'
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

app.use(express.json());

// Utilizar las rutas específicas para la tabla 'test'
app.use(testRoutes);
app.use(crudRoutesCustomer);
app.use(crudPet);
app.use(crudProfessional);
app.use(crudCategory);
app.use(crudRace);
app.use(crudService);
app.use(crudSpecie);
app.use(crudState);
app.use(crudApointment);

app.listen(puerto, () => {
    console.log(`La aplicación está escuchando en http://localhost:${puerto}`);
});