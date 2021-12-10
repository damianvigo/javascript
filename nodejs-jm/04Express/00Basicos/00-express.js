'use strict';

const express = require('express'),
  app = express();

app
  .get('/', (req, res) => {
    res.end('<h1>Hey there! since express</h1>');
  })
  .listen(3000);

console.log('Init express on port 3000');
