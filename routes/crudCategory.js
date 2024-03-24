const express = require('express');
const router = express.Router();
const crudOperationsCategory = require('../utils/crudOperationsCategory');

router.get('/category', (req, res) => {
    crudOperationsCategory.getAllCategory(res);
});

module.exports = router;