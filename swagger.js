const swaggerAutogen = require('swagger-autogen')();

const doc = {
info: {
	title: 'My API',
	description: 'Description',
},
host: 'api-64im.onrender.com',
schemes: ['https']
};

// const outputFile = './path/swagger-output.json';
// const endpointsFiles = ['./path/endpointsUser.js', './path/endpointsBook.js'];

const outputFile = './swagger.json';
const endpointsFiles = ['./app.js'];

/* NOTE: if you use the express Router, you must pass in the 
'endpointsFiles' only the root file where the route starts,
such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);