"use strict";

var promesa = new Promise(function (resolve, reject) {
  // la promesa necesita un argumento y esta es una funcion
  // accion que se ejecutara.
  // resolve()
  // reject()
  setTimeout(function () {
    var exito = true;

    if (exito) {
      resolve('La operacion tuvo exito');
    } else {
      reject('La operacion no tuvo exito');
    }
  }, 4000);
});
promesa.then(function (mensaje) {
  alert(mensaje);
});
promesa["catch"](function (mensaje) {
  alert(mensaje);
});