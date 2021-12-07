'use strict';

const fs = require('fs');
let file = './assets/nombres.txt',
  newFile = './assets/nombres-callback.txt';

fs.access(file, fs.F_OK, function (err) {
  if (err) {
    console.log('El archivo no existe');
  } else {
    console.log('El archivo existe');
    fs.readFile(file, function (err, data) {
      if (err) {
        console.log('El archivo no se pudo leer');
      } else {
        console.log('El archivo se ha leido correctamente');
        fs.writeFile(newFile, data, function (err) {
          return err
            ? console.log('El archivo no se copiar')
            : console.log('El archivo se ha copiado con exito');
        });
      }
    });
  }
});
