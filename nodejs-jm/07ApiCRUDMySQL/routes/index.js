'use strict';
// controlador

const movies = require('../models/movies'),
  express = require('express'),
  router = express.Router();

function error404(req, res, next) {
  let error = new Error(),
    locals = {
      title: 'Error 404',
      description: 'Recurso No Encontrado',
      error: error,
    };

  error.status = 404;
  res.render('error', locals);

  next();
}

router
  .use(movies)
  .get('/', (req, res, next) => {
    req.getConnection((err, movies) => {
      movies.query('SELECT * FROM movie', (err, rows) => {
        let locals = {
          title: 'Lista de Peliculas',
          data: rows,
        };
        res.render('index', locals);
      });
    });
    // next();
  })
  .get('/agregar', (req, res, next) => {
    res.render('add-movie', { title: 'Agregar Pelicula' });
  })
  .use(error404);

module.exports = router;
