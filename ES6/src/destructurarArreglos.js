const persona = ['Damian Vigo', 30, 'Argentina']

/* const nombre = persona[0] forma tradicional en js
const nombre = persona[1] forma tradicional en js */

const [nombre, , pais, profesion = 'No especificado'] = persona
// la coma para dejar el espacio y que tome el siguiente elemento

console.log(pais) 

// const mostrarInfo = (nombre) => {
//   console.log(nombre)
// }

// mostrarInfo(nombre)

const mostrarInfo = ( [nombre, , pais, profesion = 'No especificado'] = persona ) => console.log(nombre, profesion)


mostrarInfo(persona)