"use strict";

var crearObjeto = function crearObjeto(nombre, edad) {
  return {
    // nombre: nombre, 
    // edad: edad
    nombre: nombre,
    // se simplifica el codigo
    edad: edad,
    // esta funcion es un metodo dentro de un objeto
    mostrarInfo: function mostrarInfo() {
      // se quita la arrow function para agregar metodos adentro de objetos
      return "".concat(nombre, " tiene ").concat(edad, " a\xF1os");
    }
  };
}; // console.log(crearObjeto('Damian', 30))


console.log(crearObjeto('Damian', 30).mostrarInfo());