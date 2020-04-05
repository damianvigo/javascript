export const PI = Math.PI;

export let usuario = 'Damian';

let password = 'qwerty'; // primero declaracion y asignacion
// y luego el export esto es por el hoisting de js
/* export default password; esto funciona bien */

/* export default const password = "qwerty"; da error de sintaxis con let lo mismo. Con funciones declaradas funciona bien export default */

export default function saludar() {
  console.log('Hola Módulos +ES6')
}

/* export default function saluda2() { No se puede exportar 2 default
  console.log('Hola Módulos +ES6')
} */

export class Saludar {
  constructor() {
    console.log('Hola Clases +ES6')
  }
}