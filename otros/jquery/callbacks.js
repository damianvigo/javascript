$(document).ready(function() {

  

  $('#ejecutar').on('click', function(){ //primero se ejecuta slideUp y luego slideDown por eso el callback
    $('.caja').slideUp(1000, function() {
      $(this).slideDown(1000)

    })


  })


 /*  $('#ejecutar').on('click', function(){ ACA SE EJECUTAN al mismo tiempo tanto el slideUp y el alert
  porque no tiene callback
    $('.caja').slideUp(300)
    alert('animacion iniciada')
    $('.caja').slideDown(300)

  }) */



})