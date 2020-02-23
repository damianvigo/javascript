$(document).ready(function()  {
  
  // acceder a los elementos padre
  $('#tercera').parent().css({
    background: '#1b3d82'
  })

  // padres
  // $('#tercera').parents()

  // children

  // $('#padre').children().fadeOut(500)
  /* $('#padre').children('#tercera').fadeOut(500) */

  // Find busca en varios niveles
  /* $('#contenedor').find('div.caja').slideUp() */

  // Siblings selecciona los elementos hermano. Desaparecerian todos menos el
  // $('#tercera').siblings().fadeOut(1500)

  // Next - Prev
  // $('#tercera').next().css({
  //   background: '#000'
  // })

  // $('#tercera').prevAll().css({
  //   background: '#000'
  // })

  // $('#tercera').nextAll().css({
  //   background: '#000'
  // })

})