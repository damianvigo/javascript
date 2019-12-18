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

var personas = [damian, juan, nicolas, jony, fernando]

for (var i = 0; i < personas.length; i++) {
  var persona = personas [i]
  console.log(`${persona.nombre} mide ${persona.altura} mts`)
}