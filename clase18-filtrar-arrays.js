var damian = {
  nombre: 'Damian',
  apellido: 'Vigo', 
  altura: 1.80
}

var juan = {
  nombre: 'Juan',
  apellido: 'Casanova',
  altura: 1.80
}

var nicolas = {
  nombre: 'Nicolas',
  apellido: 'Brumat',
  altura: 1.85
}

var jony = {
  nombre: 'Jonathan',
  apellido: 'Gomez',
  altura: 1.76
}

var fernando = {
  nombre: 'Fernando',
  apellido: 'Monfort',
  altura: 1.85
}

/* const esAlta = (persona) => {
  return persona.altura > 1.8
} */

/* const esAlta = persona => persona.altura > 1.8 */

const esAlta = ({ altura }) => altura > 1.8
const esBaja = ({ altura }) => altura <= 1.8

var personas = [damian, juan, nicolas, jony, fernando]

// para filtrar un array y una condición

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

console.log(personasAltas)
console.log(personasBajas)