function flia(nombre = 'hola', callback) {
  callback(nombre + ' familia morel');
}

flia((saludo) => {
  console.log(saludo);
});
