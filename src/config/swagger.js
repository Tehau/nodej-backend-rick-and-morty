const swaggerJsdoc = require("swagger-jsdoc");
const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Basic Management API',
            version: '1.0.0',
            description: 'This API exposes endpoints with Rick and Morty characters.',
            contact: {
                name: 'Tehau',
                email: 'tsing.tehau@gmail.com',
            },
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
        ],
        basePath: '/'
    },
    // List of files to be processes. You can also set globs './routes/*.js'
    apis: ['./src/character/*Routes.js','./src/episode/*Routes.js', './src/app.js'],
};

const swaggerSpec = swaggerJsdoc(options);


module.exports = swaggerSpec;