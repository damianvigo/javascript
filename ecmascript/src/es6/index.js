 // vanilla
function newFunction (name, age, country) {
  var name = name || 'Damian';
  var age = age || '32';
  var country = country || 'ARG';
  console.log(name, age, country);
}

newFunction();

// es6 
function newFunction2 (name = 'Damian', age = 32, country = 'ARG') {
  console.log(name, age, country);
} 

newFunction2('Ricardo', 27, 'COL');

// es6
let hello = "Hello";
let world = "World";
let epicPhrase = `${hello} ${world}`
console.log(epicPhrase);

// vanilla - multilinea
let lorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry \n'
+ "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

// es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`

console.log(lorem);
console.log(lorem2);

// Destructuracion
let person = {
  'name': 'damian',
  'age': 32,
  'country': 'ARG'
}

console.log(person.name, person.age, person.country);

// es6
let { name, age } = person;

console.log(name, age);

// Spread Operator
let team1 = ['Damian', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Jesica', 'Camila']

let education = ['David', ...team1, ...team2]

console.log(education);

var hola = 'hola';

{
  var globalVar = 'Global Var';
}

{
  let globalLet = 'Global Let';
  console.log(globalLet)
}

console.log(globalVar);

const a = 'b';
a = 'a';
console.log(a);

let name = 'Damian';
let age = 32;

// es5
obj = { name: name, age: age };

// es6
obj2 = { name, age };
console.log(obj2)

const names = [
  {name: 'Damian', age: 32},
  {name: 'Yesica', age: 28}
]

let listOfNames = names.map(function (item) {
  console.log(item.name);
})

//es6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) =>  {
  //
}

const listOfNames4 = name => {
  //
}

const square = num => num * num;

// Promesas
const helloPromise = () => 
    new Promise((resolve, reject) => {
    true ? resolve('Hey!') : reject('Ups!!');
  });

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('Hi'))
  .catch(error => console.log(error));

//poo

class caculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB
    return this.valueA + this.valueB;
  }

}

const calc = new caculator();
console.log(calc.sum(2, 2));

import { hello } from './module';

hello();

// Generator. Una función especial que retorna una serie de valores segun el algoritmo definido

function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
  if(true) {
    yield 'World';
  }
};

const generatorHello = helloWorld();

console.log(generatorHello.next().value);

console.log(generatorHello.next().value);

console.log(generatorHello.next().value);