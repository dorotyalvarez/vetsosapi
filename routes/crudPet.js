const express = require('express');
const router = express.Router();
const crudOperationsPet = require('../utils/crudOperationsPet');

router.get('/pet', (req, res) => {
    crudOperationsPet.getAllPet(res);
});
//para traer mascota por id
router.get('/pet/pet_id/:idpet', (req, res) => {
    crudOperationsPet.getPetById(req, res);
});

router.post('/pet', (req, res) => {
    const newPet = req.body;
    crudOperationsPet.createPet(newPet, res);
});

router.put('/pet/:id', (req, res) => {
    const id = req.params.id;
    const updatedPet = req.body;
    crudOperationsPet.updatePet(id, updatedPet, res);
});


router.delete('/pet/:id', (req, res) => {
    const id = req.params.id;
    crudOperationsPet.DeletePet(id, res);
});

module.exports = router;