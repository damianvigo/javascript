"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var persona = ['Damian Vigo', 30, 'Argentina'];
/* const nombre = persona[0] forma tradicional en js
const nombre = persona[1] forma tradicional en js */

var nombre = persona[0],
    pais = persona[2],
    _persona$ = persona[3],
    profesion = _persona$ === void 0 ? 'No especificado' : _persona$; // la coma para dejar el espacio y que tome el siguiente elemento

console.log(pais); // const mostrarInfo = (nombre) => {
//   console.log(nombre)
// }
// mostrarInfo(nombre)

var mostrarInfo = function mostrarInfo() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : persona,
      _ref2 = _slicedToArray(_ref, 4),
      nombre = _ref2[0],
      pais = _ref2[2],
      _ref2$ = _ref2[3],
      profesion = _ref2$ === void 0 ? 'No especificado' : _ref2$;

  return console.log(nombre, profesion);
};

mostrarInfo(persona);