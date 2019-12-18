2var damian = {
  nombre: 'damian',
  apellido: 'vigo',
  edad: 31
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 13

}

const MAYORIA_DE_EDAD = 18 // magic number: numero fija una constante. Todo en mayusculas con guion bajo.

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
      console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

