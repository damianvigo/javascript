/* let base = prompt('Ingresa el valor de la base del rectangulo');
let height = prompt('Ingresa el valor de la altura del rectangulo');

const rectangleArea = function (base, height) {
  return base * height / 2;
}

console.log(`El area del rectangulo con base ${base} y altura ${height} es de: ${rectangleArea(base, height)}`) */


let base = prompt('Ingresa el valor de la base del rectangulo');
let height = prompt('Ingresa el valor de la altura del rectangulo');

const rectangleArea = (base, height) => base * height / 2;

console.log(`El area del rectangulo con base ${base} y altura ${height} es de: ${rectangleArea(base, height)}`)

// let lado = prompt('Ingresa el valor de los lados del cuadrado');

// const squareArea = function (lado) {
//  return lado * lado
// }

// console.log(`El area del cuadrado con lado valor a ${lado} es de: ${squareArea(lado)}`);

let lado = prompt('Ingresa el valor de los lados del cuadrado');

const squareArea = lado => lado * lado;
console.log(`El area del cuadrado con lado valor a ${lado} es de: ${squareArea(lado)}`);

/* const Pi = 3.14;

let radio = prompt('Ingresa el radio deseado')
const circleArea = function (radio) {
  return Pi * Math.pow(radio, 2)
}

console.log(`El area de un círculo con radio ${radio} es: ${circleArea(radio)}`); */

const Pi = 3.14;

let radio = prompt('Ingresa el radio deseado');
const circleArea = radio => Pi * Math.pow(radio, 2);

console.log(`El area de un círculo con radio ${radio} es: ${circleArea(radio)}`);