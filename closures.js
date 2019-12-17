function saludarFamilia(apellido) {
  return function saludarMiembroDeFamilia(nombre) {
    console.log(`Hola ${nombre} ${apellido}`);
  };
}

const saludarGomez = saludarFamilia('Gomez');
const saludarPerez = saludarFamilia('Perez');

saludarGomez('Pedro');
saludarGomez('Juan');
saludarGomez('Laura');
saludarGomez('Monica');

saludarPerez('Dario');
saludarPerez('Martin');
saludarPerez('Julieta');

const makePrefixer = prefijo => {
  return addPrefix = function (palabra) {
    console.log(`${prefijo} ${palabra}`);
  }
}

const prefijoRe = makePrefixer('re');
prefijoRe('bueno');