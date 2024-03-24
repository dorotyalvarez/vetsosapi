const express = require('express');
const router = express.Router();
const crudOperationsService = require('../utils/crudOperationsService');


router.get('/service', (req, res) => {
    crudOperationsService.getAllService(res);
});


router.post('/service', (req, res) => {
    const newPet = req.body;
    crudOperationsService.createService(newPet, res);
});

router.put('/service/:id', (req, res) => {
    const id = req.params.id;
    const updatedPet = req.body;
    crudOperationsService.updateService(id, updatedPet, res);
});


router.delete('/service/:id', (req, res) => {
    const id = req.params.id;
    crudOperationsService.DeleteService(id, res);
});







module.exports = router;