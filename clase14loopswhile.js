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

const INCREMENTO_PESO = 0.3

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

const DIAS_DEL_ANO = 365
//for (var i = 1; i <= 365; i++) { 
 
const META = damian.peso - 3 
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
var dias = 0 

while (damian.peso > META) {

  if (comeMucho()) {
  //aumentar de peso
  aumentarDePeso(damian)
}
if (realizaDeporte()) {
adelgazar(damian)
  }
  dias += 1 
}

console.log(`Pasaron ${dias} días hasta que ${damian.nombre} adelgazó 3kg`)


