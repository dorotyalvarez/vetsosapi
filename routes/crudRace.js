const express = require('express');
const router = express.Router();
const crudOperationsRace = require('../utils/crudOperationsRace');


router.get('/race', (req, res) => {
    crudOperationsRace.getAllRace(res);
});


router.post('/race', (req, res) => {
    const newPet = req.body;
    crudOperationsRace.createPet(newPet, res);
});

router.put('/race/:id', (req, res) => {
    const id = req.params.id;
    const updatedPet = req.body;
    crudOperationsRace.updatePet(id, updatedPet, res);
});


router.delete('/race/:id', (req, res) => {
    const id = req.params.id;
    crudOperationsRace.DeletePet(id, res);
});







module.exports = router;