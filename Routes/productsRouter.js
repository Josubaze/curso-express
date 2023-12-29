const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
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

router.get('/filter',(req, res)=>{ // este va por encima para que no se ejecute como el de abajo, se hace para darle prioridad.
  res.send('Yo soy un filtro');
})

//Los endpoints(url) especificos deben declararsen antes de los endpoints dinamicos. Uno de los mandamientos.
router.get('/:id',(req, res)=>{
  const { id } = req.params;
  if(id === '111'){
    res.status(200).json({
      id: id,
      name: 'Product 2',
      price: 600,
    });
  }else{
    res.status(404).json({
      "message" : "NOT FOUND"
    });
  }

})

router.post('/', (req, res) =>{
  const body = req.body;
  res.status(201).json({
    "message" : 'created',
    "data" : body
  })
})

router.put('/:id', (req, res) =>{
  const body = req.body;
  const { id } = req.params;
  res.json({
    "message" : 'update PUT',
    "data" : body,
    id,
  })
})

router.patch('/:id', (req, res) =>{
  const body = req.body;
  const { id } = req.params;
  res.json({
    "message" : 'update PATH',
    "data" : body,
    id,
  })
})

router.delete('/:id', (req, res) =>{
  const { id } = req.params;
  res.json({
    "message" : 'deleted',
    id,
  })
})


module.exports = router;
