// testRoutes.js
const express = require('express');
const router = express.Router();

const crudRoutes = require('./crudRoutes');
const crudRoutesCustomer = require('./crudRoutesCustomer');
const crudPet = require('./crudPet');
const crudProfessional = require('./crudProfessional');
const crudCategory = require('./crudCategory');
const crudRace = require('./crudRace');
const crudService = require('./crudService');
const crudSpecie = require('./crudSpecie');
const crudState = require('./crudState');
const crudApointment = require('./crudApointment');






router.use('/api', crudRoutes); // Puedes cambiar '/api' según tus necesidades
router.use('/api', crudRoutesCustomer);
router.use('/api', crudPet);
router.use('/api', crudProfessional);
router.use('/api', crudCategory);
router.use('/api', crudRace);
router.use('/api', crudService);
router.use('/api', crudSpecie);
router.use('/api', crudState);
router.use('/api', crudApointment);

module.exports = router;