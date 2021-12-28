'use strict';

const conn = require('./movie-connection'),
  Movie = () => {};

Movie.getAll = (cb) => conn.query('SELECT * FROM movie', cb);

Movie.getOne = (id, cb) =>
  conn.query('SELECT * FROM movie WHERE movie_id = ?', id, cb);

// Movie.insert = (data, cb) => conn.query('INSERT INTO movie SET ?', data, cb);

/* Movie.update = (data, cb) =>
  conn.query(
    'UPDATE movie SET ? WHERE movie_id = ?',
    [data, data.movie_id],
    cb
  ); */

Movie.save = (data, cb) => {
  conn.query(
    'SELECT * FROM movie WHERE movie_id = ?',
    data.movie_id,
    (err, rows) => {
      console.log(`Numero de registros: ${rows.length}`);

      if (err) {
        return err;
      } else {
        return rows.length == 1
          ? conn.query(
              'UPDATE movie SET ? WHERE movie_id = ?',
              [data, data.movie_id],
              cb
            )
          : conn.query('INSERT INTO movie SET ?', data, cb);
      }
    }
  );
};

Movie.delete = (id, cb) =>
  conn.query('DELETE FROM movie WHERE movie_id = ?', id, cb);

module.exports = Movie;
