// utils/crudOperationsCustomer.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0828',
    database: 'vetsos'
});

function getAllCustomers(res) {
    connection.query('SELECT * FROM customer WHERE active = 1', (error, results, fields) => {
        if (error) {
            console.error('Error al obtener clientes:', error);
            res.status(500).json({ error: 'Error al obtener clientes' });
            return;
        }
        res.json(results);
    });
}
//trae el cliente por documento
function getCustomerByDocument(req, res) {

    if (req.params.document) {
        let qstring = `SELECT * FROM customer WHERE active = 1 AND document LIKE '${req.params.document}' `;
        console.log(qstring);
        connection.query(qstring, (error, results, fields) => {

            if (error) {
                console.error('Error al obtener clientes:', error);
                res.status(500).json({ error: 'Error al obtener clientes' });
                return;
            }
            res.json(results);
        });

    } else {
        console.error('document cliente invalido');
        res.status(500).json({ error: 'document cliente invalido' });
    }

}


// trae el cliente con todas sus mascotas asociadas a el 
function getCustomerByDocumentBypet(req, res) {
    if (req.params.dont) {
        // Consulta para cumeobtener información del cliente y sus mascotas
        let qstring = `
            SELECT customer.name AS customer_name, customer.lastname AS customer_lastname, customer.document, 
                   pet.id, pet.name AS pet_name, pet.color
            FROM customer 
            JOIN pet ON customer.id = pet.fk_customer_id
            WHERE customer.document = ? AND customer.active = 1
        `;

        console.log(qstring);

        connection.query(qstring, [req.params.document], (error, results, fields) => {
            if (error) {
                console.error('Error al obtener clientes y mascotas:', error);
                res.status(500).json({ error: 'Error al obtener clientes y mascotas' });
                return;
            }

            res.json(results);
        });
    } else {
        console.error('Documento de cliente inválido');
        res.status(400).json({ error: 'Documento de cliente inválido' });
    }
}



function createCustomer(newCustomer, res) {
    connection.query('INSERT INTO customer SET ?', newCustomer, (error, results, fields) => {
        if (error) {
            console.error('Error al insertar nuevo cliente:', error);
            res.status(500).json({ error: 'Error al insertar nuevo cliente' });
            return;
        }
        res.json({ mensaje: 'Nuevo cliente insertado exitosamente' });
    });
}

function updateCustomer(id, updatedCustomer, res) {
    connection.query('UPDATE customer SET ? WHERE id = ?', [updatedCustomer, id], (error, results, fields) => {
        if (error) {
            console.error('Error al actualizar el cliente:', error);
            res.status(500).json({ error: 'Error al actualizar el cliente' });
            return;
        }
        res.json({ mensaje: 'Cliente actualizado exitosamente' });
    });
}

function softDeleteCustomer(id, res) {
    connection.query('UPDATE customer SET active = 0 WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
            console.error('Error al desactivar el cliente:', error);
            res.status(500).json({ error: 'Error al desactivar el cliente' });
            return;
        }
        res.json({ mensaje: 'Cliente desactivado exitosamente' });
    });
}

module.exports = {
    getAllCustomers,
    getCustomerByDocument,
    getCustomerByDocumentBypet,
    createCustomer,
    updateCustomer,
    softDeleteCustomer

};