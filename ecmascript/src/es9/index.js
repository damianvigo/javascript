// es9 junio 2018
const obj = {
  name: 'Damian',
  age: 32,
  country: 'ARG',
}

// operador de reposo
let { country, ...all } = obj; // extrayendo todo menos country
console.log(all);
console.log(country);
console.log(all.name);

// unir objetos a un nuevo objeto

const obj = {
  name: 'Damian',
  age: 32,
}

const obj1 = {
  ...obj,
  country: 'ARG',
}

console.log(obj1);

//  Saber cuando ha terminado el llamado y ejecutar alguna funcion o logica de codigo.

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true) 
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error')) 
  });
};

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizo'))

                    //    4 valores  //  2 digitos // 2 digitos
  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ 
  const match = regexData.exec('2018-04-20');
  const year = match[1]
  const month = match[2]
  const day = match[3]

  console.log(year, month, day)

