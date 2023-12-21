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
  res.json([
  {
    name: 'producto 1',
    price: 500,
  },
  {
    name: 'producto 2',
    price: 600,
  },
  {
    name: 'producto 3',
    price: 450,
  },
  ])
});

app.get('/products/:id',(req, res)=>{
  const { id } = req.params;
  res.json({
    id: id,
    name: 'Product 2',
    price: 600,
  });
})

app.get('/categories/:categoriesId/products/:productId', (req, res)=>{
  const { categoriesId, productId } = req.params;
  res.json({
    categoriesId,
    productId,
  });
});

app.listen(port, () => {
  console.log(`Mi port ${port}`);
})
