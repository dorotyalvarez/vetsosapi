const express = require('express');
const router = express.Router();
const crudOperationsProfessional = require('../utils/crudOperationsProfessional');


router.get('/professional', (req, res) => {
    crudOperationsProfessional.getAllProfessional(res);
});

router.post('/professional', (req, res) => {
    const newData = req.body;
    crudOperationsProfessional.createProfessional(newData, res);
});

router.put('/professional/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    crudOperationsProfessional.updateProfessional(id, updatedData, res);
});

router.delete('/professional/:id', (req, res) => {
    const id = req.params.id;
    crudOperationsProfessional.DeleteProfessional(id, res);
});

module.exports = router;