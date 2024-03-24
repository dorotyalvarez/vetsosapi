// crudOperations.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0828',
    database: 'vetsos'
});

function getAllProfessional(res) {
    connection.query('SELECT * FROM professional WHERE active = 1', (error, results, fields) => {
        if (error) {
            console.error('Error al obtener datos de la tabla test:', error);
            res.status(500).json({ error: 'Error al obtener datos de la tabla test' });
            return;
        }
        res.json(results);
    });
}

function createProfessional(newData, res) {
    connection.query('INSERT INTO professional SET ?', newData, (error, results, fields) => {
        if (error) {
            console.error('Error al insertar nuevo dato en la tabla test:', error);
            res.status(500).json({ error: 'Error al insertar nuevo dato en la tabla test' });
            return;
        }
        res.json({ mensaje: 'Nuevo dato insertado en la tabla test exitosamente' });
    });
}

function updateProfessional(id, updatedData, res) {
    updatedData.updated = new Date();

    connection.query('UPDATE professional SET ? WHERE id = ?', [updatedData, id], (error, results, fields) => {
        if (error) {
            console.error('Error al actualizar el dato en la tabla test:', error);
            res.status(500).json({ error: 'Error al actualizar el dato en la tabla test' });
            return;
        }
        res.json({ mensaje: 'Dato actualizado en la tabla test exitosamente' });
    });
}

function DeleteProfessional(id, res) {
    connection.query('UPDATE professional SET active = 0 WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
            console.error('Error al desactivar el dato en la tabla test:', error);
            res.status(500).json({ error: 'Error al desactivar el dato en la tabla test' });
            return;
        }
        res.json({ mensaje: 'Dato desactivado en la tabla test exitosamente' });
    });
}

module.exports = {
    getAllProfessional,
    createProfessional,
    updateProfessional,
    DeleteProfessional
};