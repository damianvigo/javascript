const customers = [
  { name: 'Leane Graham', age: 20, occupation: 'Finance', end: 1999 },
  { name: 'Ervin Howell', age: 30, occupation: 'Technology', end: 2000 },
  { name: 'Victor Plains', age: 17, occupation: 'Sports', end: 2015 },
  { name: 'Clementine Bauch', age: 61, occupation: 'Technology', end: 1987 },
  { name: 'Patricia Lebsack', age: 89, occupation: 'Auto', end: 1999 },
  { name: 'Chelsey Dietrich', age: 21, occupation: 'Retail', end: 1995 },
  { name: 'Mrs. Dennis Schullist', age: 31, occupation: 'Retail', end: 2008 },
  { name: 'Kurtis Weissnat', age: 48, occupation: 'Finance', end: 2006 },
  { name: 'Nicholas Runolfsdottir', age: 67, occupation: 'Technology', end: 2019 },
  { name: 'Gienna Reichert', age: 29, occupation: 'Sports', end: 2022 },
];

//Reduce
const occupCont = customers.reduce((cont, customer) => {
  if (customer.occupation == 'Technology') {
    return cont + 1;
  } else {
    return cont;
  }
}, 0)
console.log(occupCont);

// Filter
// Devuelva los clientes que trabajan en deportes
const result = customers.filter(customer => {
  return customer.occupation === 'Sports';
})
console.log(result);

// Map
// Traer el apellido de cada cliente
const lastNames = customers.map(customer => {
  const name = customer.name;
  const nameArray = name.split(' ');
  const lastName = nameArray[nameArray.length - 1];
  return lastName;
})
console.log(lastNames);


// Obtener un arreglo con la edad de cada uno de los clientes
const result = customers.map(customer => {
  return customer.age;
})
console.log(result);


// Obtener un arreglo con los clientes y su edad sumada en 5
const result2 = customers.map(customer => {
  const tempCustomer = customer
  tempCustomer.age += 5;
  return tempCustomer
})
console.log(result2);

// ForEach
// Traer los  nombres de todos que tienen edad mayor a 30
let result = [];
customers.forEach((customer, index) => {
  if (customer.age > 30) {
    customer.index = index;
    result.push(customer);
  }
});
console.log(result);

// Sumar la edad de cada uno en uno
customers.forEach(customer => {
  customer.age++;
});
console.log(customers);



// Loops
// Traer los  nombres de todos que tienen edad mayor a 30
let result = [];
for (let i = 0; i < customers.length; i++) {
  const customer = customers[i];
  if (customer.age > 30) {
    result.push(customer.name);
  }
}

console.log(result);

// Sumar la edad de cada uno en uno
for (let i = 0; i < customers.length; i++) {
  const customer = customers[i];
  customer.age++;
}

console.log(customers);

// Sumar la edad de cada uno de los clientes
let sumResult = 0;
for (let i = 0; i < customers.length; i++) {
  const customer = customers[i];
  sumResult += customer.age++;
}

console.log(sumResult);

// Traer el primer cliente que trabaje en Tecnologia
let techCustomer = null;
for (let i = 0; i < customers.length; i++) {
  const customer = customers[i];
  if (customer.occupation === 'Technology') {
    techCustomer = customer;
  }
}

console.log(techCustomer);
