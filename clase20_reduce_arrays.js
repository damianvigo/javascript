var damian = {
  nombre: 'Damian',
  apellido: 'Vigo', 
  altura: 1.80,
  cantidadDeJuegos: 50
}

var juan = {
  nombre: 'Juan',
  apellido: 'Casanova',
  altura: 1.80,
  cantidadDeJuegos: 100
}

var nicolas = {
  nombre: 'Nicolas',
  apellido: 'Brumat',
  altura: 1.85,
  cantidadDeJuegos: 30
}

var jony = {
  nombre: 'Jonathan',
  apellido: 'Sanchez',
  altura: 1.76,
  cantidadDeJuegos: 40
}

/* const esAlta = (persona) => {
  return persona.altura > 1.8
} */

/* const esAlta = persona => persona.altura > 1.8 */

const esAlta = ({ altura }) => altura > 1.8
const esBaja = ({ altura }) => altura <= 1.8

var personas = [damian, juan, nicolas, jony,]

// para filtrar. Un array y una condición

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

/* console.log(personasAltas)+

console.log(personasBajas) */

// pasar a centimetros

const pasarAlturaACms = persona => ({
  // persona.altura = persona.altura*100
  ...persona,
  altura:  persona.altura * 100
}) 
  
/*   return {
      ...persona,
      altura:  persona.altura * 100
    } 
} */

var personasCms = personas.map(pasarAlturaACms)

/* var acum = 0

for (var i = 0; i < personas.length; i++) {
    acum = acum + personas[i].cantidadDeJuegos
} */

/* console.log(`En total todos tienen: ${acum} juegos`) */

/* const reducer = (acum, persona) => {
  return acum + persona.cantidadDeJuegos
} */

const reducer = (acum, { cantidadDeJuegos }) => acum + cantidadDeJuegos


var totalDeJuegos = personas.reduce(reducer, 0)


console.log(`En total todos tienen: ${totalDeJuegos} juegos`)