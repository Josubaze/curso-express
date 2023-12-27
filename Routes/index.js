const express = require('express');

const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const contactusRouter = require('./contactusRouter');
const categoriesRouter = require('./categoriesRouter');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/contact-us', contactusRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;

