"use strict";

function registrarUsuario(nombre) {
  var pais = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'No especificado';
  var correo = arguments.length > 2 ? arguments[2] : undefined;
  var telefono = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'No especificado';
  return "Nombre: ".concat(nombre, ", Pais: ").concat(pais, ", Correo: ").concat(correo, ", Telefono: ").concat(telefono);
}

console.log(registrarUsuario('Damian', undefined, 'correo@correo.com'));