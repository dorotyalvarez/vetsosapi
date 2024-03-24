const express = require('express');
const router = express.Router();
const crudOperationsSpecie = require('../utils/crudOperationsSpecie');

router.get('/specie', (req, res) => {
    crudOperationsSpecie.getAllSpecie(res);
});

module.exports = router;