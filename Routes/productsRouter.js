const express = require('express');
const ProductService = require('./../Services/productService');

const router = express.Router();
const service = new ProductService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

//Los endpoints(url) especificos deben declararsen antes de los endpoints dinamicos. Uno de los mandamientos.
router.get('/:id',(req, res)=>{
  const { id } = req.params;
  const product = service.findOne(id);
  if(product){
    res.status(200).json(product);
  }else{
    res.status(404).json(product);
  }
})

router.post('/', (req, res) =>{
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct)
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
  const product = service.update(id, body);
  res.json(product);
})

router.delete('/:id', (req, res) =>{
  const { id } = req.params;
  const rts = service.delete(id);
  res.json(rts);
})


module.exports = router;
