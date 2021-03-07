const Math = {};

function add(x1, x2) {
  return x1 + x2;
}

function substract(x1, x2) {
  return x1 - x2;
}

function multiply(x1, x2) {
  return x1 * x2;
}

function divide(x1, x2) {
  if (x2 == 0) {
    console.log('No se puede dividir por 0');
  } else {
    return x1 / x2;
  }
}

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

function hello(name) {
  console.log('Hola', name);
}

// module.exports permite exportar objetos, funciones, variables y cualquier dato de js
module.exports = Math;
// module.exports = hello;

// exporta una propiedad de un objeto
// exports.add = add;
// exports.substract = substract;
// exports.multiply = multiply;
// exports.divide = divide;
