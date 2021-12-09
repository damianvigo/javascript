'use strict';

const fs = require('fs');
let file = './assets/nombres.txt';
let newFile = './assets/nombres-promises-es6.txt';
const promise = new Promise(function (resolve, reject) {
  fs.access(file, fs.F_OK, function (err) {
    return err ? reject(new Error('El archivo no existe')) : resolve(true);
  });
});

promise
  .then((resolved, rejected) => {
    console.log('El archivo existe');

    return new Promise(function (resolve, reject) {
      fs.readFile(file, function (err, data) {
        return err
          ? reject(new Error('El archivo no se pudo leer'))
          : resolve(data);
      });
    });
  })
  .then((resolved, rejected) => {
    console.log('El archivo se ha leido correctamente');

    return new Promise(function (resolve, reject) {
      fs.writeFile(newFile, resolved, function (err) {
        return err
          ? reject(new Error('El archivo no se pudo copiar'))
          : resolve('El archivo se ha copiado con exito');
      });
    });
  })
  .then((resolved, rejected) => console.log(resolved))
  .catch((err) => {
    return console.log(err.message);
  });
