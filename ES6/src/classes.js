class Usuario { // recomendable primera letra de las clases con mayuscula
  constructor(nombre, edad, correo) {
    this.nombre = nombre,
    this.edad = edad, // es una variable pero dentro de las clases se le dice propiedades
    this.correo = correo
  }

  mostrarSaludo(mensaje) { // es una funcion pero dentro de las clases se le dice metodo
    return mensaje 
  }


  mostrarInfo() {
    return `
      Nombre: ${this.nombre} <br /> 
      Edad: ${this.edad} <br /> 
      Correo: ${this.correo} <br /> 
      <hr />
    `
  }

}

const damian = new Usuario('Damian Vigo', 30, 'correo@correo.com') // nueva instancia. Se ejecuta de forma automatica
document.write(damian.mostrarInfo())

class Estudiante extends Usuario { // obtener todas las propiedades y metodos en este caso de usuario
    constructor(nombre, edad, correo, carrera) {
      super(nombre, edad, correo)
      this.carrera = carrera 
    }

    mostrarInfo() {
      return `
        Nombre: ${this.nombre} <br /> 
        Edad: ${this.edad} <br /> 
        Correo: ${this.correo} <br /> 
        Carrera: ${this.carrera}
        <hr />
      `
    }
}

const alejandro = new Estudiante('Alejandro', 31, 'ejemplo@correo.com', 'Desarrollador Web')
document.write(alejandro.mostrarInfo())

