'use strict';

const conn = require('./movie-connection'),
  MovieModel = () => {};

MovieModel.getAll = (cb) => {
  conn.find().exec((err, docs) => {
    if (err) throw err;
    cb(docs);
  });
};

MovieModel.getOne = (id, cb) => {
  conn.findOne({ movie_id: id }).exec((err, docs) => {
    if (err) throw err;
    cb(docs);
  });
};

// Movie.insert = (data, cb) => conn.query('INSERT INTO movie SET ?', data, cb);

/* Movie.update = (data, cb) =>
  conn.query(
    'UPDATE movie SET ? WHERE movie_id = ?',
    [data, data.movie_id],
    cb
  ); */

MovieModel.save = (data, cb) => {
  conn.count({ movie_id: data.movie_id }).exec((err, count) => {
    if (err) throw err;
    console.log(`Numero de Docs: ${count}`);

    if (count == 0) {
      conn.create(data, (err) => {
        if (err) throw err;
        cb();
      });
    } else if (count == 1) {
      conn.findOneAndUpdate(
        { movie_id: data.movie_id },
        {
          title: data.title,
          release_year: data.release_year,
          rating: data.rating,
          image: data.image,
        },
        (err) => {
          if (err) throw err;
          cb();
        }
      );
    }
  });
};

MovieModel.delete = (id, cb) => {
  conn.remove({ movie_id: id }, (err, docs) => {
    if (err) throw err;
    cb();
  });
};

module.exports = MovieModel;
