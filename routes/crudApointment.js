const express = require('express');
const router = express.Router();
const crudOperationsApointment = require('../utils/crudOperationsApointment');

router.get('/apointment', (req, res) => {
    crudOperationsApointment.getAllApointment(res);
});


router.post('/apointment', (req, res) => {
    const newPet = req.body;
    crudOperationsApointment.createApointment(newPet, res);
});

router.put('/apointment/:id', (req, res) => {
    const id = req.params.id;
    const updatedPet = req.body;
    crudOperationsApointment.updateApointment(id, updatedPet, res);
});


router.delete('/apointment/:id', (req, res) => {
    const id = req.params.id;
    crudOperationsApointment.DeleteApointment(id, res);
});

module.exports = router;