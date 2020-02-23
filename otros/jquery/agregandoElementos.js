$(document).ready(function () {

  var contenedor = $('#contenedor') // variable contenedor para que el documento solo accesa una vez y no todo el tiempo, esto es mejor asi se optimiza mejor el codigo
  var contador = 1

  $('#agregar').on('click', function() {
    var caja = $('<div></div>').attr('class', 'caja').text(contador)
    contador++

    // contenedor.append(caja)
    // contenedor.prepend(caja)

    // contenedor.before(caja)
    contenedor.after(caja)
  })



})