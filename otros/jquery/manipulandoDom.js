$(document).ready(function() {

  // $('#titulo').text('Encabezado Modificado')
 
  $('#titulo').html('<u>Encabezado Modificado</u>')

  var nombre = $('#nombre')
  nombre.on('change', function() {
    $('#titulo').text(nombre.val())
  })

  // $('#enlace').text('damianvigo.com')
  // $('#enlace').attr('href', 'https://damianvigo.com') // attr recibe 2 parametros el atributo que queremos modificar y el valor osea la url

  // $('#enlace').attr({
  //   'class': 'azul',
  //   'target': '_blank'
  // }) MODIFICAR MULTPLES ATRIBUTOS



})