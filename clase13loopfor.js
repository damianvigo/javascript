var damian = {
  nombre: 'Damian',
  apellido: 'Vigo',
  edad: 31,
  peso: 75
}

console.log(`Al inicio del año ${damian.nombre} pesa ${damian.peso} kg`)

/* function aumentarDePeso (persona) {
  return persona.peso += 200
} */

/* const aumentarDePeso = (persona, incremento) => {
  persona.peso += 200
} */

const INCREMENTO_PESO = 0.2

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

const DIAS_DEL_ANO = 365
//for (var i = 1; i <= 365; i++) { 
 
  for (var i = 1; i <= DIAS_DEL_ANO; i++) {

  var random = Math.random()
  
  if (random < 0.25) {
    //aumenta de peso
    aumentarDePeso(damian)
  } else if (random < 0.5) {
    // adelgazar
    adelgazar(damian)
  }
}

console.log(`Al final del año ${damian.nombre} pesa ${damian.peso.toFixed(2)} kg`)


