$(document).ready(function() {
  var boton = $("#boton"); // asignar el id boton a la variable boton para que se lea una sola ves la ubicacion del boton

  /* boton.click(function() {
    alert('Holi')
  }) */

  // Evento con funcion
 
  /* function saludo() {
    alert("Saludos");
  } */
    // boton.on("click", saludo);

  // Evento con callback
  
  /* boton.on('mouseenter', function() {
    document.body.style.background = '#000'
  })

  boton.on('mouseleave', function() {
    document.body.style.background = '#fff'
  }) */

  // Eliminando Eventos

  /* boton.on('click', function() {
    alert('Saludos')
    console.log('Saludos')
  })

  $('#desactivar').on('click', function(){
    boton.off('click')
    console.log('Boton de Ejecutar desactivado')
  }) */

  // Previniendo el comportamiento de los enlaces. PONER EL PARAMETRO "e"

  $('a').on('click', function(e) {
    e.preventDefault()
    alert('Link desactivado')
  })

});
