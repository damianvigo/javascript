// callbackhell -
const CORRIENDO = 3000;
const DUCHA = 2000;
const VESTIRSE = 2000;
const ESTUDIAR = 5000;
const $agenda = document.getElementById('agenda');

// const corriendo = new Promise ((todo está ok, todo está mal) => {
// })

const corriendo = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Ahora estoy bañandome');
    reject('No me bañe aún');
  }, CORRIENDO);
});

corriendo
  .then(message => {
    console.log(message);
  })
  .catch(message => {
    console.log(message);
  });
