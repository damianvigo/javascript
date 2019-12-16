const nombre = 'Damián';

const dias = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo'
];

function correr () {
  const min = 5;
  const max = 15;
  return Math.round(Math.random() * (max - min))  + min;
}

let totalKms = 0;
const length = dias.length;
for (let i = 0; i < length; i++) {
  const kms = correr();
  // totalKms = totalKms + kms
  totalKms += kms;
  console.log(`El día ${dias[i]} ${nombre} corrió ${kms} kms`);
}

const promedioKms = totalKms / length;
console.log(`En promedio, ${nombre} corrió ${promedioKms.toFixed(2)} kms`);