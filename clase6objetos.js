
var damian = /* objeto! */ 
{
nombre: 'Damian', // clave y valor
apellido: 'Vigo',
edad: 31
}

var dario = 
{
  nombre: 'Dario',
  apellido: 'Susnisky',
  edad: 27
}

function imprimirNombreEnMayusculas ({ nombre }) /* agregar un parametro para no modificar la variable global */
{                                            /* nombre solo existe dentro de la funcion */
 console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(damian)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas( { nombre: 'Pepe'})
// imprimirNombreEnMayusculas({ apellido: 'Gomez'}) da error porque el objeto no tiene el atributo nombre
