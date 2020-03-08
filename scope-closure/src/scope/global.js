/* Scope: Es el alcance que va a tener una variable dentro del código. En otras palabras, el Scope se encargará de decidir a que bloques de código va a acceder una variable.

Global Scope : No están dentro de funciones o bloques, por lo tanto se puede acceder a ellas de manera global.

Con var podemos re-asignar una variable pero es una mala práctica.

Con let y const no podemos, aparecerá un error.

Es una mala práctica crear una variable sin las palabras reservadas: var, let y const.
Si se asigna una variable dentro de una función sin las palabras reservadas será una variable global.

La doble asignación de una variable también es una mala práctica. */

/* var permite volver a declarar y reasignar una variable, let permite reasignar el valor de una variable pero no declararla de nuevo y const no permite que la variable sea reasignada o declarada de nuevo con excepción de objetos los cuales pueden ser mutados en sus propiedades aún si están declarados con const */

var hello = 'Hello';
var hello = 'Hello +';
let world = 'Hello World';
const helloWorld = 'Hello World!';

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
}

anotherFunction();

/* const helloWorld = () => {
  globalVar = 'im global';
}

helloWorld();
console.log(globalVar) MALA PRACTICA */

const anotherFunction = () => {
  var localVar = globalVar = 'Im Global'; /* doble asignacion de variables MALA PRACTICA */
}

anotherFunction()
console.log(globalVar);
