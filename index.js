const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en Express');
});

app.get('/contact-us', (req, res) => {
  res.send('Contactanos via tlf: 0414589678 o email: @example.com');
});

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {

    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

app.get('/products/filter',(req, res)=>{ // este va por encima para que no se ejecute como el de abajo, se hace para darle prioridad.
  res.send('Yo soy un filtro');
})
//Los endpoints(url) especificos deben declararsen antes de los endpoints dinamicos. Uno de los mandamientos.
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


app.get('/users', (req, res) => {
  const { limit, offset } = req.query
  if (limit && offset) {
    res.json({
      limit,
      offset,
    })
  }else{
    res.send('no hay parametros');
  }

})


app.listen(port, () => {
  console.log(`Mi port ${port}`);
})
