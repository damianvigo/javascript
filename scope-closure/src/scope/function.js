const fruits = () => {
  var fruit = 'apple';
  console.log(fruit)
}

fruits();
/* console.log(fruit); no esta definida, no puede acceder de global hacia el local */

const anotherFunction = () => {
  var x = 1;
  var x = 2;
  let y = 1; 
  /* let y = 2; let no puede reasignar el valor, var Si. Usar let para no reescribir nada */
  console.log(x);
  console.log(y);
}

anotherFunction();