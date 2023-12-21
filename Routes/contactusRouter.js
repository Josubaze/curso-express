const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Contactanos via tlf: 0414589678 o email: @example.com');
});

module.exports = router;
