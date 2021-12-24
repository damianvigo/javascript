'use strict';

const conn = require('./movie-connection'),
  Movie = () => {};

Movie.getAll = (cb) => conn.query('SELECT * FROM movie', cb);

Movie.getOne = () => {};

Movie.insert = (data, cb) => conn.query('INSERT INTO movie SET ?', data, cb);

Movie.update = () => {};

Movie.delete = () => {};

module.exports = Movie;
