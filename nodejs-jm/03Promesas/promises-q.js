'use strict';

const fs = require('fs'),
  Q = require('q');
let file = './assets/nombres.txt',
  newFile = './assets/nombres-promises-q.txt';

function existFile(file) {
  let defer = Q.defer();
  fs.access(file, fs.F_OK, function (err) {
    return err
      ? defer.reject(new Error('El archivo no existe'))
      : defer.resolve(true);
  });

  return defer.promise;
}

function readFile(file) {
  let defer = Q.defer();

  console.log('El archivo existe');

  fs.readFile(file, function (err, data) {
    return err
      ? defer.reject(new Error('El archivo no se pudo leer'))
      : defer.resolve(data);
  });

  return defer.promise;
}

function writeFile(file, data) {
  let defer = Q.defer();

  console.log('El archivo se ha leido correctamente');

  fs.writeFile(file, data, function (err) {
    return err
      ? defer.reject(new Error('El archivo no se pudo copiar'))
      : defer.resolve('El archivo se ha copiado con exito');
  });

  return defer.promise;
}

/*
Si existe el archivo
	//Léelo
	//Cópialo
	//Avisa que se copió
	//Maneja Errores
*/
// ES5
/* existFile(file)
  .then(function () {
    return readFile(file);
  })
  .then(function (dataPromise) {
    return writeFile(newFile, dataPromise);
  })
  .then(function (dataPromise) {
    return console.log(dataPromise);
  })
  .fail(function (err) {
    return console.log(err.message);
  }); */
//ES6
existFile(file)
  .then(() => readFile(file))
  .then((dataPromise) => writeFile(newFile, dataPromise))
  .then((dataPromise) => console.log(dataPromise))
  .fail((err) => console.log(err.message));
