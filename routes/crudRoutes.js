// crudRoutes.js
const express = require('express');
const router = express.Router();
const crudOperations = require('../utils/crudOperations');

router.get('/test', (req, res) => {
    crudOperations.getAll(res);
});

router.post('/test', (req, res) => {
    const newData = req.body;
    crudOperations.create(newData, res);
});

router.put('/test/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    crudOperations.update(id, updatedData, res);
});

router.delete('/test/:id', (req, res) => {
    const id = req.params.id;
    crudOperations.softDelete(id, res);
});

module.exports = router;