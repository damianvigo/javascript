const CORRIENDO = 3000;
const DUCHA = 2000;
const VESTIRSE = 2000;
const ESTUDIAR = 5000;
const $agenda = document.getElementById('agenda');

// const corriendo = new Promise ((todo está ok, todo está mal) => {
// })

// const corriendo = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('Ahora estoy bañandome');
//     reject('No me bañe aún');
//   }, CORRIENDO);
// });

// corriendo
//   .then(message => {
//     console.log(message);
//   })
//   .catch(message => {
//     console.log(message);
//   });

function corriendo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Ahora estoy bañandome');
      // reject('No me bañe aún');
    }, CORRIENDO);
  });
}

function ducha(message) {
  $agenda.textContent = message;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Me estoy vistiendo..');
      // reject('No me bañe aún');
    }, DUCHA);
  });
}

function vestirse(message) {
  $agenda.textContent = message;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Ahora estoy estudiando..');
      // reject('No me bañe aún');
    }, VESTIRSE);
  });
}

function estudiar(message) {
  $agenda.textContent = message;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Ahora estoy Descansando..');
      // reject('No me bañe aún');
    }, ESTUDIAR);
  });
}

corriendo()
.then(ducha)
.then(vestirse)
.then(estudiar)
