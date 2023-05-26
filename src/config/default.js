// module.exports = {
//     PORT: process.env.PORT || 3000,
//     DB_HOST: process.env.DB_HOST || '',
//     DB_PORT: process.env.DB_PORT || '',
//     DB_USERNAME: process.env.DB_USERNAME || '',
//     DB_USERNAME_PASSWORD: process.env.DB_USERNAME_PASSWORD || '',
//     DB_NAME: process.env.DB_NAME || '',
// };
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "test_db",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
