var nombre = 'Damian'

function imprimirNombreEnMayusculas (nombre) /* agregar un parametro para no modificar la variable global */
{                                            /* nombre solo existe dentro de la funcion */
  nombre = nombre.toUpperCase()
  console.log(nombre)
}

imprimirNombreEnMayusculas(nombre)

