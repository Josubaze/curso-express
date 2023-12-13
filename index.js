const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en Express');
});

app.get('/contact-us', (req, res) => {
  res.send('Contactanos via tlf: 0414589678 o email: @example.com');
});
app.get('/products', (req, res) => {
  res.json({
    name: 'producto 1',
    price: 500,
  })
});

app.listen(port, () => {
  console.log(`Mi port ${port}`);
})
