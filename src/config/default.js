// module.exports = {
//     PORT: process.env.PORT || 3000,
//     DB_HOST: process.env.DB_HOST || '',
//     DB_PORT: process.env.DB_PORT || '',
//     DB_USERNAME: process.env.DB_USERNAME || '',
//     DB_USERNAME_PASSWORD: process.env.DB_USERNAME_PASSWORD || '',
//     DB_NAME: process.env.DB_NAME || '',
// };
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'test_db',
    password: 'root',
    port: 5432,
})

module.exports = {
    pool
}