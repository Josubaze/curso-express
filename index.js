const express = require('express');
const routerApi = require('./Routes');

const { logError, errorHandler } = require('./Middlewares/errorHandler');

const app = express();
const port = 3000;

app.use(express.json()); // para recibir data tipo json

app.get('/', (req, res) => {
  res.send('Hola mi server en Express');
});


routerApi(app);
app.use(logError);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Mi port ${port}`);
})
