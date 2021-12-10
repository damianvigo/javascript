'use strict';

const express = require('express'),
  app = express();

app
  .get('/', (req, res) => {
    /* res.end('<h1>Hey there! since express</h1>'); */
    res.send('<h1>Hey there! since express</h1>');
  })

  .get('/dev', (req, res) => {
    /* res.end('<h1>Hey there! since express</h1>'); */
    // res.send('<h1>Welcome dev</h1>');
    res.redirect(301, 'http://node.js.org');
  })

  .get('/json', (req, res) => {
    res.json({
      name: 'Damian',
      user: 'dvdev',
      nationality: 'Argentina',
    });
  })

  .get('/render', (req, res) => {
    // res.render('assets/index.html');
    // res.render(`${__dirname}/assets/index.html`);
  })

  .listen(3000);

console.log('Init express on port 3000');
