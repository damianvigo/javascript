class Persona {
  constructor  (nombre, apellido, altura) {
    // console.log('me ejecutaron')
    this.nombre = nombre
    this.apellido = apellido 
    this.altura = altura
    // no hace falta usar return con new.
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
  }

  soyAlto() {
    return this.altura > 1.8
  }

}


class Desarrollador extends Persona {

  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
   }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
  }

}


/* var damian = new Persona('Damian', 'Vigo', 1.72)     // "new" crear nuevos objetos dado un prototipo en este caso "Persona"
//damian.saludar()  Hola me llamo Damián Vigo
var erika = new Persona ('Erika', 'Luna', 1.65)
var arturo = new Persona ('Arturo', 'Martinez', 1.89) */

/* damian.soyAlto()
erika.soyAlto()
arturo.soyAlto() */