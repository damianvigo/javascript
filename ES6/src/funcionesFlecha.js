const nombres = ['Damian', 'Alejandro', 'Martin', 'Cesar']

const numero_caracteres = nombres.map( nombre => `${nombre} tiene ${nombre.length} letras`)

// const numero_caracteres = nombres.map(function(nombre){
//   return `${nombre} tiene ${nombre.length} letras`
// })
// con mas de una linea de codigo hay que agregar las llaves  y si hay llaves usar return
// un solo parametro se pueden quitar los parentesis


console.log(numero_caracteres)

// (parametro) => {
//   return // codigo a ejecutar
// }