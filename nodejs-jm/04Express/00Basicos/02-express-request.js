'use strict';

const express = require('express'),
  app = express();

app
  .get('/', (req, res) => {
    res.end('<h1>Hey there! since express =D</h1>');
  })

  .get('/user/:id-:name-:age', (req, res) => {
    res.end(`
    <h1>${req.params.name}, Welcome to express your id is <b>${req.params.id}</b> y tienes ${req.params.age} a&ntildeos </h1>
    
    `);
  })

  /* search?s=dvdev */
  .get('/search', (req, res) => {
    res.end(`
      <h1>Welcome to express, the results your search are: <mark>${req.query.s}</mark></h1>
      `);
  })

  .listen(3000);

console.log('Init express on port 3000');
