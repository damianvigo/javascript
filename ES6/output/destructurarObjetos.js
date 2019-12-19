"use strict";

var usuario = {
  nombre: 'Damian',
  correo: ' correo@correo.com',
  edad: 30,
  pais: 'Argentina',
  profesion: 'Desarrollador Web'
};
var nombre = usuario.nombre,
    pais = usuario.pais,
    _usuario$profesion = usuario.profesion,
    profesion = _usuario$profesion === void 0 ? 'No especificado' : _usuario$profesion; // console.log(profesion)

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre,
      profesion = _ref.profesion;
  return console.log("".concat(nombre, " es ").concat(profesion));
};

mostrarInfo(usuario);