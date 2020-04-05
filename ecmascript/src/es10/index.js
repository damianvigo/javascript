//array.flat

let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(1))


//---------------
//flatmap - aplanador y mapeador de array

let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));

let array2 = [1, 2 ,3 ,4];
let arrayMap = array2.map(x => [x * 2]);
let arrayFlatMap = array2.flatMap(x => [x * 2])
console.log(arrayMap);
console.log(arrayFlatMap);
//---------------
// trimStart

let hello = '               hello world'
console.log(hello);
console.log(hello.trimStart())

//-----------------
//trimEnd

let hello = 'hello world               '
console.log(hello);
console.log(hello.trimEnd())

//------------------
// Optional catch bending

try {

} catch{
    error
}

//------------------
//fromEntries -> clave valor en objetos

let entries = [['name','damian'], ['age',32]];
console.log(Object.fromEntries(entries));

//----------------------
// Objeto de tipo simbolo

let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description)
