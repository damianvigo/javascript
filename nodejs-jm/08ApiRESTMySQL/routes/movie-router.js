'use strict';
// API CRUD MySQL
// controlador

const MovieController = require('../controllers/movie-controller'),
  express = require('express'),
  router = express.Router();

// controlador
router
  .get('/', MovieController.getAll)
  .get('/agregar', MovieController.addForm)
  .post('/', MovieController.insert)
  .get('/editar/:movie_id', (req, res, next) => {
    let movie_id = req.params.movie_id;
    console.log(movie_id);

    req.getConnection((err, movies) => {
      // comodin ? pasa a ser movie_id
      movies.query(
        'SELECT * FROM movie WHERE movie_id = ?',
        movie_id,
        (err, rows) => {
          console.log(err, '---', rows);
          if (err) {
            next(new Error('Registro No Encontrado'));
          } else {
            let locals = {
              title: 'Editar Pelicula',
              data: rows,
            };
            res.render('edit-movie', locals);
          }
        }
      );
    });
  })
  .post('/actualizar/:movie_id', (req, res, next) => {
    req.getConnection((err, movies) => {
      // lo que viene del formulario
      let movie = {
        movie_id: req.body.movie_id,
        title: req.body.title,
        release_year: req.body.release_year,
        rating: req.body.rating,
        image: req.body.image,
      };

      // console.log(movie);
      // 2 comodines - primer comodin todo el obj movie, mas de 2 obj usar un array
      movies.query(
        'UPDATE movie SET ? WHERE movie_id = ?',
        [movie, movie.movie_id],
        (err, rows) => {
          return err
            ? next(new Error('Error al actualizar'))
            : res.redirect('/');
        }
      );
    });
  })
  .post('/eliminar/:movie_id', (req, res, next) => {
    let movie_id = req.params.movie_id;
    console.log(movie_id);

    req.getConnection((err, movies) => {
      // comodin ? pasa a ser movie_id
      movies.query(
        'DELETE FROM movie WHERE movie_id = ?',
        movie_id,
        (err, rows) => {
          console.log(err, '---', rows);
          return err
            ? next(new Error('Registro No Encontrado'))
            : res.redirect('/');
        }
      );
    });
  })
  .use(MovieController.error404);

module.exports = router;
