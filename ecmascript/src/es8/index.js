// es8 junio de 2017

const data = {
  frontend: 'Damian',
  backend: 'Julia',
  design:  'Ana'
}

const entries = Object.entries(data);
console.log(entries); // retorna una matriz, en este caso un array de strings
console.log(entries.length); // 3 elementos

const data = {
  frontend: 'Damian',
  backend: 'Julia',
  design:  'Ana', // trailling commas 
}

const values = Object.values(data); // transforma los valores a un array de strings
console.log(values); 
console.log(values.length); // 3 elementos

const string = 'hello';
console.log(string.padStart(7, 'hi')) // anade hi antes de hello
console.log(string.padEnd(12, ' -----')) // primer parametro, cuantos caracteres como maximo. // lo anade al final 
console.log('food'.padEnd(12, ' ------')) // se puede usar para una estructura como una lista

const obj = {
  name: 'damian', // al siguiente puede haber un valor como no, sintaxis amigable
}

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false) 
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test error'))  
  })
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();