/* Nuevos Tipos de Datos */
// let id = 'hola';
// let id2 = 'hola';
// console.log(id === id2) true;
// Symbol() crea una referencia unica // suelen usarse a menudo para indentificar propiedades de objetos para evitar colisiones de propiedades que podamos sobreescribir
// se mantienen privados!
let id = Symbol('id');
let id2 = Symbol('id2');

console.log(id === id2);
console.log(id, id2);
console.log(typeof id, typeof id2); // son un dato primitivo

const NOMBRE = Symbol('nombre'); // entre parentesis es una breve descripcion
const SALUDAR = Symbol('saludar');

const persona_1 = {
  [NOMBRE]: 'dami',
  nacionalidad: 'Argentino',
};

persona_1.NOMBRE = 'Damian Vigo';
console.log(persona_1[NOMBRE]);

persona_1[SALUDAR] = function () {
  console.log('Hola!');
};

console.log(persona_1);
persona_1[SALUDAR]();

for (let propiedad in persona_1) {
  console.log(propiedad);
  console.log(persona_1[propiedad]);
}

console.log(Object.getOwnPropertySymbols(persona_1));

/* Tipo de dato SET - es un tipo de dato que PARECE un array, que solo acepta valores unicos, valores primitivos. NO PERMITE QUE SE REPITAN ELEMENTOS*/
const set = new Set([1, 2, 3, 3, 4, 5, true, false, false, {}, {}, 'hola', 'HOLA']);
console.log(set);
console.log(set.size); // longitud de los elementos se usa size no length

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});

console.log(set2);
console.log(set2.size);

console.log('Recorriendo set');
for (item of set) {
  console.log(item);
}

console.log('Recorriendo set2');
set2.forEach((item) => console.log(item));

let arr = Array.from(set); //convirtiendo set a un array
console.log(arr);
console.log(arr[0]);
console.log(arr[9]);

set.delete('HOLA');
console.log(set);
console.log(set.has('hola')); // comprueba si un dato existe dentro la colección o no

set2.clear();
console.log(set2);

console.log('**********Map**********');
/* Tipo de DATO map - Son objetos que sirven para almacenar conjunto de valores a manera de objeto */
const mapa = new Map();
mapa.set('nombre', 'Dami');
mapa.set('apellido', 'Vigo');
mapa.set('Nacionalidad', 'Argentino');

console.log(mapa);
console.log(mapa.size); // numero de elementos
console.log(mapa.has('correo')); // existe correo? devuelve false
console.log(mapa.get('nombre')); // obteniendo valor
mapa.set('nombre', 'Damian Vigo'); // sobreescribir el valor con el metodo set
console.log(mapa.get('nombre'));
mapa.delete('apellido');

mapa.set(19, 'diecinueve'); // se pueden generar llaves que no son cadenas de texto, no se aconseja.
mapa.set(false, 'falso');
mapa.set({}, '{}');
console.log(mapa);

for (let [key, value] of mapa) {
  console.log(`LLave: ${key}, Valor: ${value}`);
}

const mapa2 = new Map([
  // otra forma de inicializar los valores en un map
  ['nombre', 'Orion'],
  ['edad', 8],
  ['animal', 'gato'],
  [null, 'nulo'],
]);

console.log(mapa2);

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);

/* Tipo de dato WeakSets & WeakMaps
- Solo almacenan referencias debiles, las llaves deben ser de tipo objeto
- No son elementos iterables
- No se pueden borrar todos los elementos de una
- Tampoco se pueden verificar su tamaño, es decir no tienen la propiedad size
 */
// const ws = new WeakSet([1,2,3,3,4,5,true,false,false,{},{},'hola','HOLA']); da error, para almacenar los valores se debe hacer uno por uno usando el metodo add
const ws = new WeakSet();

let valor1 = { valor1: 1 };
let valor2 = { valor2: 2 };
let valor3 = { valor3: 3 };

ws.add(valor1);
ws.add(valor2);
console.log(ws);

console.log(ws.has(valor1));
console.log(ws.has(valor3));

ws.delete(valor2);
console.log(ws);

ws.add(valor2);
ws.add(valor3);
console.log(ws);

// setInterval(() => console.log(ws), 1000);

// setInterval(() => {
//   valor1 = null;
//   valor2 = null;
//   valor3 = null;
// }, 5000);

/* WeakMaps */
// const wm = new WeakMap([
//   ["nombre", 'Orion'],
//   ['edad', 8],
//   ['animal', 'gato'],
//   [null, 'nulo']
// ]); Pasa lo mismo que con weakSet, se permiten llaves de tipos objeto que esten refenciadas en una variable

const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);
console.log(wm);

console.log(wm.has(llave1));
console.log(wm.has(llave3));

console.log(wm.get(llave1));
console.log(wm.get(llave2));
console.log(wm.get(llave3));

wm.delete(llave2);
console.log(wm);

wm.set(llave2, 2);
wm.set(llave3, 3);
console.log(wm);

// setInterval(() => console.log(wm), 1000);

// setTimeout(() => {
//   llave1 = null;
//   llave2 = null;
//   llave3 = null;
// }, 5000);

/* Iterables & Iterators */
// const iterable = [1, 2, 3, 4, 5];
// const iterable = new Set([1, 2, 3, 3, 3, 4, 5, 6, 6]);
// const iterable = 'Hola'
// const iterable = new Map([
//   ['Nombre', 'Damian'],
//   ['Apellido', ' Vigo'],
// ]);

// //Accedemos al iterador del iterable
// const iterador = iterable[Symbol.iterator]();

// console.log(iterable);
// console.log(iterador);
// // console.log(iterador.next());
// // console.log(iterador.next());
// // console.log(iterador.next());
// // console.log(iterador.next());
// // console.log(iterador.next());
// // console.log(iterador.next());

// let next = iterador.next();

// while (!next.done) {
//   console.log(next.value);
//   next = iterador.next();
// }

/* Generator - Sintaxis mas sencilla para generar iteradores. Hasta cierto punto permite manejar comportamiento ansincrono */
function* iterable() {
  yield 'hola'; // es como un return
  console.log('Hola consola');
  yield 'hola 2 '; // se detiene aca
  console.log('Seguimos con más instrucciones de nuestro código');
  yield 'hola 3';
  yield 'hola 4';
}

let iterador = iterable();
console.log(iterador.next());

for (let y of iterador) {
  console.log(y);
}

const array = [...iterable()];
console.log(array);

function cuadrado(valor) {
  setTimeout(() => {
    return console.log({ valor, resultado: valor * valor });
  }, Math.random() * 1000);
}

function* generador() {
  console.log('Inicia Generator');
  yield cuadrado(0);
  yield cuadrado(1);
  yield cuadrado(2);
  yield cuadrado(3);
  yield cuadrado(4);
  yield cuadrado(5);
  console.log('Termina Generator');
}

// let gen = generador();

// for (let y of gen) {
//   console.log(y);
// }

console.log('**********Proxies***********');
// Permite crear un objeto basado en un objeto literal inicial. Parecido al modelo a seguir de las clases.
// Variable dami es una copia de persona, mantiene una vinculacion entre la copia y el objeto original.
const persona = {
  nombre: '',
  apellido: '',
  edad: 0,
};

// Handler
const manejador = {
  set(obj, prop, valor) {
    if (Object.keys(obj).indexOf(prop) === -1) {
      // indexOf busca una lista de coincidencias. IndexOf devuelve un numero cuando encuentra una coincidencia.
      return console.error(`La propiedad "${prop}" no existe en el objeto persona`);
    }

    if (
      (prop === 'nombre' || prop === 'apellido') &&
      !/^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(valor) // evualuando expresion regular con el metodo test - \s espacios en blanco
    ) {
      return console.error(`La propiedad "${prop}" sólo acepta letras y espacios en blanco`);
    }
    obj[prop] = valor;
  },
};

const dami = new Proxy(persona, manejador);
dami.nombre = 'Damian20';
dami.apellido = 'Vigo';
dami.edad = 32;
dami.web = 'https://damianvigo.com';
console.log(dami);

console.log(persona);

console.log('************Propiedades Dinámicas****************');

let aleatorio = Math.round(Math.random() * 100 + 5);
const objUsuarios = {
  [`id_${aleatorio}`]: 'Valor Aleatorio',
};
console.log(objUsuarios);

const usuarios = ['Damian', 'Miguel', 'Camila', 'Leon', 'Jesica'];
// Crear una propiedad despues que se ha definido un objeto, usar la notacion del punto o notacion de corchete. Con corchete nos permite crear de manera dinamica los nombres las propiedades del objeto
usuarios.forEach((usuario, index) => (objUsuarios[`id_${index}`] = usuario));

console.log(objUsuarios);

