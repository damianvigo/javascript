const texto = 'Hola Mundo'

console.log(texto, 'empieza con h:', texto.toLowerCase().startsWith('h')) // metodo texto.startsWith para ver con que letra empieza
console.log(texto, 'termina con o:', texto.toLowerCase().endsWith('o'))
console.log(texto, 'incluye la palabra', texto.includes('damian')) // palabra damian no esta incluida en el texto, aparece false en la consola

const amigos = ['Damian', 'Daniel', 'Cesar', 'Manuel', 'Alejandro'];

console.log(amigos.includes('Manuel')) // revisar con el metodo .includes si hay un elemento dentro del arreglo

console.log(amigos.find( amigo => amigo.length > 6 )) // funcion de tipo flecha dentro del metodo .find // devuelve el elemento que tenga una cantidad de caracteres mayor a 6

console.log(amigos.findIndex( (amigo) => {
  return amigo === 'Manuel'
} ))