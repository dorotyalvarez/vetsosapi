const mysql2 = require("mysql2")
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0828',
    database: 'vetsos'
});


function getAllApointment(res) {
    connection.query('SELECT * FROM apointment WHERE active = 1', (error, results, fields) => {
        if (error) {
            console.error('Error al obtener datos de la tabla test:', error);
            res.status(500).json({ error: 'Error al obtener datos de la tabla test' });
            return;
        }
        res.json(results);
    });
}


function createApointment(newData, res) {
    connection.query('INSERT INTO apointment SET ?', newData, (error, results, fields) => {
        if (error) {
            console.error('Error al insertar nuevo dato en la tabla test:', error);
            res.status(500).json({ error: 'Error al insertar nuevo dato en la tabla test' });
            return;
        }
        res.json({ mensaje: 'Nuevo dato insertado en la tabla test exitosamente' });
    });
}

function updateApointment(id, updatedData, res) {
    updatedData.updated = new Date();

    connection.query('UPDATE apointment SET ? WHERE id = ?', [updatedData, id], (error, results, fields) => {
        if (error) {
            console.error('Error al actualizar el dato en la tabla test:', error);
            res.status(500).json({ error: 'Error al actualizar el dato en la tabla test' });
            return;
        }
        res.json({ mensaje: 'Dato actualizado en la tabla test exitosamente' });
    });
}

function DeleteApointment(id, res) {
    connection.query('UPDATE apointment SET active = 0 WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
            console.error('Error al desactivar el dato en la tabla test:', error);
            res.status(500).json({ error: 'Error al desactivar el dato en la tabla test' });
            return;
        }
        res.json({ mensaje: 'Dato desactivado en la tabla test exitosamente' });
    });
}

module.exports = {
    getAllApointment,
    createApointment,
    updateApointment,
    DeleteApointment
};