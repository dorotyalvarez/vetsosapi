const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0828',
    database: 'vetsos'
});

function getAllState(res) {
    connection.query('SELECT * FROM state ', (error, results, fields) => {
        if (error) {
            console.error('Error al obtener clientes:', error);
            res.status(500).json({ error: 'Error al obtener clientes' });
            return;
        }
        res.json(results);
    });
}

function getStateByState(req, res) {
    if (req.params.stateid) {
        // Consulta para obtener información del estado de las citas
        let qstring = `
        SELECT
            customer.name AS customer_name,
            customer.lastname AS customer_lastname,
            apointment.id AS cita_id,
            pet.name AS name_pet,
            calendar.citacion AS fecha_progrmada
        FROM customer
        JOIN apointment ON customer.id = apointment.fk_customer_id
        JOIN calendar ON calendar.id = apointment.fk_calendar_id
        JOIN pet ON pet.id = apointment.fk_pet_id
        WHERE apointment.fk_state_id = ?; 
        `;

        console.log(qstring);

        connection.query(qstring, [req.params.stateid], (error, results, fields) => {
            if (error) {
                console.error('Error al obtener los estados:', error);
                res.status(500).json({ error: 'Error general' });
                return;
            }

            res.json(results);
        });
    } else {
        console.error('ID de estado inválido');
        res.status(400).json({ error: 'ID de estado inválido' });
        res.status(200).json({ error: 'ID de los estados solo es 1,2,3,4' });
    }
}



module.exports = {
    getAllState,
    getStateByState

};