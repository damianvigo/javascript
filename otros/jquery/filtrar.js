$(document).ready(function() {

  // $('.caja').first().css({ background: '#000' }) //
  // $('.caja').last().css({ background: '#000' })

  // $('.caja').eq(1).css({ background: '#000'}) /* con eq se selecciona como si fuera un array del 0 en adelante */

  // $('.caja').filter('#segunda').css({ background: '#f9a03f' }) con el metodo filter se puede seleccionar mas de un elemento 

  $('.caja').not('#segunda').css({ background: '#f9a03f' })

})