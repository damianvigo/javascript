var nombre = 'Damian';

function saludar(nombre) {
  // nombre = 'Eric' No declarado con var asi que pisa el anterior valor.
  var nombre; // Hoisting
  if (true) {
    nombre = 'Eric';
  }
  console.log(`Hola ${nombre}`);
}

saludar();
// saludar('Eric');
console.log(`La variable nombre tiene el valor ${nombre}`);

function saludarADamian() {
  const nombre = 'Damian';

  for (let i = 0; i < 10; i++) {
    console.log(`Hola ${nombre}`);
  }
}

saludarADamian();
