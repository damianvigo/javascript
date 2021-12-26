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
  .get('/editar/:movie_id', MovieController.getOne)
  .post('/actualizar/:movie_id', MovieController.update)
  .post('/eliminar/:movie_id', MovieController.delete)
  .use(MovieController.error404);

module.exports = router;
