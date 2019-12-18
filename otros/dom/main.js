var cajas = document.getElementsByTagName('div')
// var cajas = document.getElementsByClassName('caja')
var primeraCaja = document.getElementById('primeraCaja')


// cajas[0].textContent = 'Hola Mundo desde el DOM'
// cajas[0].innerHTML = '<h1>Hola</h1>'

/* primeraCaja.textContent = 'Hola Mundo desde el DOM' */
/* primeraCaja.innerHTML = '<u>Hola Mundo</u>' */

// Creando Nodos. 5 pasos
// crear el elemento
var caja = document.createElement('div')
// crear un nodo de texto
var contenido = document.createTextNode('Hola Mundo')
// añadir el nodo de texto al elemento
caja.appendChild(contenido)
// agregar atributos a la caja
/* caja.setAttribute('class', 'caja naranja') */

// agregar el elemento al documento
var contenedor = document.getElementById('contenedor')
contenedor.appendChild(caja)

// Modificando la clase o id de un elemento
caja.id = 'primera'
caja.className = 'caja naranja'

/* cajas[0].parentNode para conocer el elemento padre de la primera caja*/

var padre = cajas[0].parentNode /* esto para posicionar el elemento */

/* padre.insertBefore(caja, primeraCaja) */
/* padre.insertBefore(caja, cajas[2]) */

padre.replaceChild(caja, cajas[0])

padre.removeChild(cajas[3])