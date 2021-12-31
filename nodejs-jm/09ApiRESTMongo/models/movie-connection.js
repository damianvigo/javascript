'use strict';

const mongoose = require('mongoose'),
  conf = require('./db-conf.json'),
  Schema = mongoose.Schema,
  MovieSchema = new Schema(
    {
      movie_id: 'string',
      title: 'string',
      release_year: 'string',
      rating: 'string',
      image: 'string',
    },
    { collection: 'movie' }
  ),
  MovieModel = mongoose.model('Movie', MovieSchema);

mongoose.connect(`mongodb:\/\/${conf.mongo.host}/${conf.mongo.db}`);

// console.log(conf.mysql);

module.exports = MovieModel;
