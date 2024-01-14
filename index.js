const express = require('express');
const routerApi = require('./Routes');
const cors = require('cors')
const { logError, errorHandler, boomErrorHandler } = require('./Middlewares/errorHandler');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json()); // para recibir data tipo json


// el CORS antes de la rutas para evitar conflictos
const whitelist = ['http://127.0.0.1:51980', 'http:://myappp.com'];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin){
      callback(null, true);
    }else{
      callback(new Error('No permitido!'));
    }
  }
}
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hola mi server en Express');
});


routerApi(app); // rutas principales

//Manejo de errores - middlewares
app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

//ver puerto activo..
app.listen(port, () => {
  console.log(`Mi port ${port}`);
})
