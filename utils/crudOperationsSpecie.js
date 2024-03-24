const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0828',
    database: 'vetsos'
});

function getAllSpecie(res) {
    connection.query('SELECT * FROM specie ', (error, results, fields) => {
        if (error) {
            console.error('Error al obtener clientes:', error);
            res.status(500).json({ error: 'Error al obtener clientes' });
            return;
        }
        res.json(results);
    });
}


module.exports = {
    getAllSpecie,


};