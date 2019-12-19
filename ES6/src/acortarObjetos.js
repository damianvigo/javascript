const crearObjeto = (nombre, edad) => {
  return {
    // nombre: nombre, 
    // edad: edad
    nombre, // se simplifica el codigo
    edad,
    // esta funcion es un metodo dentro de un objeto
    mostrarInfo() { // se quita la arrow function para agregar metodos adentro de objetos
      return `${nombre} tiene ${edad} años`
    }
  }
}

// console.log(crearObjeto('Damian', 30))
console.log(crearObjeto('Damian', 30).mostrarInfo())