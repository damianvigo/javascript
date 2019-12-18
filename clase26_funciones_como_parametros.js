class Persona {
  constructor  (nombre, apellido, altura) {
    // console.log('me ejecutaron')
    this.nombre = nombre
    this.apellido = apellido 
    this.altura = altura
    // no hace falta usar return con new.
  }

  saludar(fn) {
    var { nombre, apellido } = this
    console.log(`Hola, me llamo ${nombre} ${apellido}`)
    if (fn) {
      fn(nombre, apellido)
    }
  }

  soyAlto() {
    return this.altura > 1.8
  }

}

class Desarrollador extends Persona {

  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
   }

  saludar(fn) {
    var { nombre, apellido } = this
    /* var nombre = this.nombre
    var apellido = this.apellido */
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`)
    if (fn) {
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
      console.log('Ah mirá, no sabía que eras desarrollador')
    }
  }

var damian = new Persona('Damian', 'Vigo', 1.72)     // "new" crear nuevos objetos dado un prototipo en este caso "Persona"
//damian.saludar()  Hola me llamo Damián Vigo
var erika = new Persona ('Erika', 'Luna', 1.65)
var arturo = new Desarrollador ('Arturo', 'Martinez', 1.89)

damian.saludar(responderSaludo)
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)

/* damian.soyAlto()
erika.soyAlto()
arturo.soyAlto() */