'use strict';

const express = require('express'),
  app = express();

app
  .get('/', (req, res) => {
    res.sendFile(`${__dirname}/assets/index.html`);
  })
  .listen(3000);

console.log('Init express on port 3000');
