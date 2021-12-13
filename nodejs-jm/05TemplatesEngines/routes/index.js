'use strict';

const express = require('express'),
  router = express.Router();

router.get('/', (req, res) => {
  res.end(`<h1>hey there!</h1>`);
});

module.exports = router;
