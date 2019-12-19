"use strict";

var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  // parametro rest, recibe todos los argumentos
  console.log(datos);
};

var arreglosDatos = ['Damian', 30, 'correo@correo.com', 'Argentina'];
mostrarDatos.apply(void 0, arreglosDatos); // parametro spread se envia a partir de un array