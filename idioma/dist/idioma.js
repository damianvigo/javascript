"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = idioma;

function idioma(str) {
  var translation = str; // Si la palabra termina en "ar", se le quitan esos dos caracteres

  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  } // Si la palabra inicia con Z, se le añade "pe" al final


  if (str.toLowerCase().startsWith('z')) {
    //   translation = translation + 'pe'
    translation += 'pe';
  } // Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión del medio


  var length = translation.length;

  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = "".concat(firstHalf, "-").concat(secondHalf);
  } // Si la palabra origin es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalanado mayusculas y minusculas


  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;

    for (var i = 0; i < length; i++) {
      var _char = str.charAt(i);

      translation += capitalize ? _char.toUpperCase() : _char.toLowerCase();
      capitalize = !capitalize;
    }

    return translation;
  }

  if (str == reverse(str)) {
    return minMay(str);
  }

  return translation;
}