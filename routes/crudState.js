const express = require('express');
const router = express.Router();
const crudOperationsState = require('../utils/crudOperationsState');

router.get('/state', (req, res) => {
    crudOperationsState.getAllState(res);
});

router.get('/state/stateby/:stateid', (req, res) => {
    crudOperationsState.getStateByState(req, res);
});


module.exports = router;