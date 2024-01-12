const express = require('express');
const ProductService = require('./../Services/productService');
const validatorHandler = require('./../Middlewares/validatorHandler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../Schemas/productSchema');


const router = express.Router();
const service = new ProductService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

//Los endpoints(url) especificos deben declararsen antes de los endpoints dinamicos. Uno de los mandamientos.
router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next)=>{
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) =>{
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct)
  }
);

router.put('/:id', async (req, res) =>{
  const body = req.body;
  const { id } = req.params;
  res.json({
    "message" : 'update PUT',
    "data" : body,
    id,
  })
});

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) =>{
  try {
    const body = req.body;
    const { id } = req.params;
    const product = await service.update(id, body);
    res.json(product);

  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res) =>{
  const { id } = req.params;
  const rts = await service.delete(id);
  res.json(rts);
});


module.exports = router;
