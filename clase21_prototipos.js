function Persona (nombre, apellido) {
  // console.log('me ejecutaron')
  this.nombre = nombre
  this.apellido = apellido 
  // no hace falta usar return con new.
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

var damian = new Persona('Damian', 'Vigo')     // "new" crear nuevos objetos dado un prototipo en este caso "Persona"
//damian.saludar()  Hola me llamo Damián Vigo
var erika = new Persona ('Erika', 'Luna')
var arturo = new Persona ('Arturo', 'Martinez')