const mostrarDatos = (...datos) => { // parametro rest, recibe todos los argumentos
  console.log(datos)
}

const arreglosDatos = ['Damian', 30, 'correo@correo.com', 'Argentina']
mostrarDatos(...arreglosDatos) // parametro spread se envia a partir de un array