function Persona (nombre, apellido, altura) {
  // console.log('me ejecutaron')
  this.nombre = nombre
  this.apellido = apellido 
  this.altura = altura
  // no hace falta usar return con new.
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
  return this.altura > 1.8
}

var damian = new Persona('Damian', 'Vigo', 1.72)     // "new" crear nuevos objetos dado un prototipo en este caso "Persona"
//damian.saludar()  Hola me llamo Damián Vigo
var erika = new Persona ('Erika', 'Luna', 1.65)
var arturo = new Persona ('Arturo', 'Martinez', 1.89)