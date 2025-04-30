// swagger-autogen.js
import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js']; // Alternativamente: ['./node/routes/router.js']

const doc = {
  info: {
    title: 'API ComfaExpress',
    description: 'API para la gestión de turnos y pedidos en ComfaExpress',
  },
  host: 'localhost:5001', // Usa el puerto real de tu backend
  schemes: ['http'],
};

swaggerAutogen()(outputFile, endpointsFiles, doc);
