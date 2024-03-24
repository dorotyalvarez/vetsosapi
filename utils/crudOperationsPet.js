const mysql2 = require("mysql2")
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0828',
    database: 'vetsos'
});


function getAllPet(res) {
    connection.query('SELECT * FROM pet WHERE active = 1', (error, results, fields) => {
        if (error) {
            console.error('Error al obtener datos de la tabla test:', error);
            res.status(500).json({ error: 'Error al obtener datos de la tabla test' });
            return;
        }
        res.json(results);
    });
}

function getPetById(req, res) {
    if (req.params.idpet) {
        // Consulta para obtener información de la mascota por su ID
        let qstring = `
            SELECT
                customer.name AS customer_name,
                race.name_race,
                pet.name AS pet_name,
                pet.color,
                specie.typeanimal,
                pet.weight,
                pet.sex,
                pet.age
            FROM
                customer
            JOIN
                pet ON customer.id = pet.fk_customer_id
            JOIN
                race ON race.id = pet.fk_race_id
            JOIN
                specie ON specie.id = pet.fk_specie_id
            WHERE
                pet.id = ?; 
        `;


        connection.query(qstring, [req.params.idpet], (error, results, fields) => {
            if (error) {
                console.error('Error al obtener la mascota:', error);
                res.status(500).json({ error: 'Error al obtener la mascota' });
                return;
            }

            res.json(results);
        });
    } else {
        console.error('ID inválido');
        res.status(400).json({ error: 'ID inválido' });
    }
}


function createPet(newData, res) {
    connection.query('INSERT INTO pet SET ?', newData, (error, results, fields) => {
        if (error) {
            console.error('Error al insertar nuevo dato en la tabla test:', error);
            res.status(500).json({ error: 'Error al insertar nuevo dato en la tabla test' });
            return;
        }
        res.json({ mensaje: 'Nuevo dato insertado en la tabla test exitosamente' });
    });
}

function updatePet(id, updatedData, res) {
    updatedData.updated = new Date();

    connection.query('UPDATE pet SET ? WHERE id = ?', [updatedData, id], (error, results, fields) => {
        if (error) {
            console.error('Error al actualizar el dato en la tabla test:', error);
            res.status(500).json({ error: 'Error al actualizar el dato en la tabla test' });
            return;
        }
        res.json({ mensaje: 'Dato actualizado en la tabla test exitosamente' });
    });
}

function DeletePet(id, res) {
    connection.query('UPDATE pet SET active = 0 WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
            console.error('Error al desactivar el dato en la tabla test:', error);
            res.status(500).json({ error: 'Error al desactivar el dato en la tabla test' });
            return;
        }
        res.json({ mensaje: 'Dato desactivado en la tabla test exitosamente' });
    });
}

module.exports = {
    getAllPet,
    getPetById,
    createPet,
    updatePet,
    DeletePet
};