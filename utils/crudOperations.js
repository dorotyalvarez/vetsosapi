// crudOperations.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0828',
    database: 'vetsos'
});

function getAll(res) {
    connection.query('SELECT * FROM test WHERE active = 1', (error, results, fields) => {
        if (error) {
            console.error('Error al DATED DATE de la tabla test:', error);
            res.status(500).json({ error: 'Error al UPDATED DATE de la tabla test' });
            return;
        }
        res.json(results);
    });
}

function create(newData, res) {
    connection.query('INSERT INTO test SET ?', newData, (error, results, fields) => {
        if (error) {
            console.error('Error al insertar nuevo dato en la tabla test:', error);
            res.status(500).json({ error: 'Error al insertar nuevo dato en la tabla test' });
            return;
        }
        res.json({ mensaje: 'Nuevo dato insertado en la tabla test exitosamente' });
    });
}

function update(id, updatedData, res) {
    updatedData.updated = new Date();

    connection.query('UPDATE test SET ? WHERE id = ?', [updatedData, id], (error, results, fields) => {
        if (error) {
            console.error('Error al actualizar el dato en la tabla test:', error);
            res.status(500).json({ error: 'Error al actualizar el dato en la tabla test' });
            return;
        }
        res.json({ mensaje: 'Dato actualizado en la tabla test exitosamente' });
    });
}

function softDelete(id, res) {
    connection.query('UPDATE test SET active = 0 WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
            console.error('Error al desactivar el dato en la tabla test:', error);
            res.status(500).json({ error: 'Error al desactivar el dato en la tabla test' });
            return;
        }
        res.json({ mensaje: 'Dato desactivado en la tabla test exitosamente' });
    });
}

module.exports = {
    getAll,
    create,
    update,
    softDelete
};