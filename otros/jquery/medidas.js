$(document).ready(function () {

  var titulo = $('#titulo')
  var info = $('#info')

  // Calcula el ancho
  info.append('Ancho: ' + titulo.width() + '<br />')
  
  // Calcula el ancho + el padding
  info.append('Ancho Interno: ' + titulo.innerWidth() + '<br />')
  
  // Calcula el ancho + padding + borde
  info.append('Ancho Externo: ' + titulo.outerWidth() + '<br />')
  
  // Calcula el ancho + padding + borde + el margen
  info.append('Ancho Externo: ' + titulo.outerWidth(true) + '<br />')
  
  // alto
  info.append('Alto: ' + titulo.height() + '<br />')
  
  // alto + el padding
  info.append('Alto Interno: ' + titulo.innerHeight() + '<br />')
  
  // alto + el padding + el borde
  info.append('Alto Externo: ' + titulo.outerHeight() + '<br />')
  
  // alto + el padding + el borde + el margin
  info.append('Alto Externo: ' + titulo.outerHeight(true) + '<br />')



})