// routes/crudRoutesCustomer.js
const express = require('express');
const router = express.Router();
const crudOperationsCustomer = require('../utils/crudOperationsCustomer');

router.get('/customer', (req, res) => {
    crudOperationsCustomer.getAllCustomers(res);
});
//obtener 
router.get('/customer/by_document/:document', (req, res) => {
    crudOperationsCustomer.getCustomerByDocument(req, res);
});
//para obtener mascotas de un customer
router.get('/customer/by_document_bypet/:document', (req, res) => {
    crudOperationsCustomer.getCustomerByDocumentBypet(req, res);
});


router.post('/customer', (req, res) => {
    const newCustomer = req.body;
    crudOperationsCustomer.createCustomer(newCustomer, res);
});

router.put('/customer/:id', (req, res) => {
    const id = req.params.id;
    const updatedCustomer = req.body;
    crudOperationsCustomer.updateCustomer(id, updatedCustomer, res);
});

router.delete('/customer/:id', (req, res) => {
    const id = req.params.id;
    crudOperationsCustomer.softDeleteCustomer(id, res);
});

module.exports = router;