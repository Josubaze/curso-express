const express = require('express');

const router = express.Router();

router.get('/:categoriesId/products/:productId', (req, res)=>{
  const { categoriesId, productId } = req.params;
  res.json({
    categoriesId,
    productId,
  });
});

module.exports = router;
