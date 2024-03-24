const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0828',
    database: 'vetsos'
});

function getAllService(res) {
    connection.query('SELECT * FROM service WHERE active = 1', (error, results, fields) => {
        if (error) {
            console.error('error al UPDATE los date')
            res.status(500).json({ error: 'error al update races' });
            return;
        }
        res.json(results);
    });
}

function createService(newData, res) {
    connection.query('INSERT INTO service SET ?', newData, (error, results, fields) => {
        if (error) {
            console.error('Error al insertar nuevo dato en la tabla test:', error);
            res.status(500).json({ error: 'Error al insertar nuevo dato en la tabla test' });
            return;
        }
        res.json({ mensaje: 'Nuevo dato insertado en la tabla test exitosamente' });
    });
}

function updateService(id, updatedData, res) {
    updatedData.updated = new Date();

    connection.query('UPDATE service SET ? WHERE id = ?', [updatedData, id], (error, results, fields) => {
        if (error) {
            console.error('Error al actualizar el dato en la tabla test:', error);
            res.status(500).json({ error: 'Error al actualizar el dato en la tabla test' });
            return;
        }
        res.json({ mensaje: 'Dato actualizado en la tabla test exitosamente' });
    });
}

function DeleteService(id, res) {
    connection.query('UPDATE service SET active = 0 WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
            console.error('Error al desactivar el dato en la tabla test:', error);
            res.status(500).json({ error: 'Error al desactivar el dato en la tabla test' });
            return;
        }
        res.json({ mensaje: 'Dato desactivado en la tabla test exitosamente' });
    });
}





module.exports = {
    getAllService,
    createService,
    updateService,
    DeleteService
}