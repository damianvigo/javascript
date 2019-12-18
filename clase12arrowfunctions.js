var damian = {
  nombre: 'damian',
  apellido: 'vigo',
  edad: 31
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 13

}

const MAYORIA_DE_EDAD = 18

/* var esMayorDeEdad = function (persona) {          ASIGNAR UNA VARIABLE A UNA FUNCION
  return persona.edad >= MAYORIA_DE_EDAD        
} */

//   const esMayorDeEdad = (persona) => {       simplificado ARROW FUNCTIONS
//   return persona.edad >= MAYORIA_DE_EDAD
// }

// const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD           MAS SIMPLIFICADO BORRAR RETURN Y BORRAR LLAVES

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD     // Destructurando el parametro edad 


function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
      console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

function permitirAcceso(persona) {
  if (!esMayorDeEdad(persona)) {
    console.log('ACCESO DENEGADO')
  }
}

const MENOR_DE_EDAD = 18

const esMenorDeEdad = ({ edad }) => edad <= MENOR_DE_EDAD 

function permitirAcceso(persona) {
  if(!esMenorDeEdad(persona)) {
    console.log('ACESSO PERMITIDO')
  }
}
