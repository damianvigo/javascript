// function suma(...numbers) {// spread
//   let acum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     acum += numbers[i];
//   }

const suma = (...numeros) => numeros.reduce((acum, numero) => acum += numero, 0);
//   return numbers.reduce(function(acum, numbers) {
//     acum += numbers;
//     return acum;
//   }, 0);
// }

const dobles = (...numeros) => numeros.map(numero => numero * 2);
// function dobles(...numbers) {
//   return numbers.map(function(numero) {
//     return numero * 2;
//   });
// }

// function pares(...numbers) {
//   numbers.filter(function (numero) {
//     return numero % 2 == 0;
//   })
// }
const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0);

console.log(suma(4, 8, 12, 8954, 7, 9));
console.log(dobles(3, 5, 10));
console.log(pares(1,2,3,4,5,6,7,8,9,10));