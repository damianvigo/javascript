'use strict';

const conn = require('./movie-connection'),
  Movie = () => {};

Movie.getAll = (cb) => {};

Movie.getOne = (id, cb) => {};

// Movie.insert = (data, cb) => conn.query('INSERT INTO movie SET ?', data, cb);

/* Movie.update = (data, cb) =>
  conn.query(
    'UPDATE movie SET ? WHERE movie_id = ?',
    [data, data.movie_id],
    cb
  ); */

Movie.save = (data, cb) => {};

Movie.delete = (id, cb) => {};

module.exports = Movie;
