export default class Persona { // exportar la clase como default se pueden omitir las llaves en el import  y cambiar el nombre si se quiere
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  mostrarInfo() {
    console.log(`${this.nombre} tiene ${this.edad} años`);
  }
}

// export {Persona, Estudiante}
// export {Persona}
// export default Persona;