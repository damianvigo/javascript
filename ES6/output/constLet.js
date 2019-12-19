// Caracteristica #1 
// Podemos re-declarar variables con var 
// Esto puede causar problemas en donde re-declaremos sin darnos cuenta
// var nombre = 'Damian Vigo' // mala practica, puede ocasionar problemas en el codigo a pesar de que este siga funcionando
// var nombre = 'Daniel'
// let pais = 'Argentina' // error en la consola
// let pais = 'España'
// let pais = 'Argentina' // error en la consola
// let pais = 'España'
// console.log('Hola ' + pais)
// Caracteristica #2 
// let y const tambien tienen un scope en el que no podemos acceder a las variables creadas dentro de una funcion
// function saludo() {
//   // var nombre = 'Damian'
//   let nombre = 'Damian'
//   return 'Hola ' + nombre
// }
// // console.log(saludo())
// console.log(nombre) // error no se puede acceder a la variable que esta dentro de una funcion, esta protegida. Con let pasa igual
// Caracteristica #3
//let y const tienen un scope de tipo bloque
// var edad = 18
// if(edad >= 18) {
//   let esAdulto = true // variable esAdulto esta protegida dentro del bloque para que funcion el console.log debe ir dentro del if(bloque)
// } 
// console.log(esAdulto)
// Caracteristica #4 cuando usamos let o const
// let nombre = 'Damian'
// nombre = 'Dani' se puede ya que la remplaza 
// const nombre = 'Damian' // error no se puede con una constante, el valor de una variable nunca cambia
// nombre = 'Dani'
// const colores = ['Rojo', 'Verde'] // en el array, no se puede cambiar los valores pero se puede agregar un valor
// colores.push('Azul')
// console.log(colores)
// var no se utiliza mas
// let 
// const 
"use strict";