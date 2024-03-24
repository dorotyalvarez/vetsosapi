const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0828',
    database: 'vetsos'
});

function getAllRace(res) {
    connection.query('SELECT * FROM race WHERE active = 1', (error, results, fields) => {
        if (error) {
            console.error('error al UPDATE los date')
            res.status(500).json({ error: 'error al update races' });
            return;
        }
        res.json(results);
    });
}

function createRace(newData, res) {
    connection.query('INSERT INTO race SET ?', newData, (error, results, fields) => {
        if (error) {
            console.error('Error al insertar nuevo dato en la tabla test:', error);
            res.status(500).json({ error: 'Error al insertar nuevo dato en la tabla test' });
            return;
        }
        res.json({ mensaje: 'Nuevo dato insertado en la tabla test exitosamente' });
    });
}

function updateRace(id, updatedData, res) {
    updatedData.updated = new Date();

    connection.query('UPDATE race SET ? WHERE id = ?', [updatedData, id], (error, results, fields) => {
        if (error) {
            console.error('Error al actualizar el dato en la tabla test:', error);
            res.status(500).json({ error: 'Error al actualizar el dato en la tabla test' });
            return;
        }
        res.json({ mensaje: 'Dato actualizado en la tabla test exitosamente' });
    });
}

function DeleteRace(id, res) {
    connection.query('UPDATE race SET active = 0 WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
            console.error('Error al desactivar el dato en la tabla test:', error);
            res.status(500).json({ error: 'Error al desactivar el dato en la tabla test' });
            return;
        }
        res.json({ mensaje: 'Dato desactivado en la tabla test exitosamente' });
    });
}





module.exports = {
    getAllRace,
    createRace,
    updateRace,
    DeleteRace
}