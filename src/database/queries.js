const {pool} = require("../config/default");


const getCharacters = (request, response) => {
    pool.query('SELECT * FROM characters ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getCharacterById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM characters WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createCharacter = (request, response) => {
    const {name, email} = request.body

    pool.query('INSERT INTO characters (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
}

const updateCharacter = (request, response) => {
    const id = parseInt(request.params.id)
    const {name, email} = request.body

    pool.query(
        'UPDATE characters SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

const deleteCharacter = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM characters WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

module.exports = {
    getCharacters,
    getUserById: getCharacterById,
    createCharacter,
    updateCharacter,
    deleteCharacter,
}