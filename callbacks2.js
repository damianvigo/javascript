// callbackhell - 
const CORRIENDO = 3000;
const DUCHA = 2000; 
const VESTIRSE = 2000;
const ESTUDIAR = 5000;
const $agenda = document.getElementById('agenda');
setTimeout(() => {
  $agenda.textContent = 'Ahora me estoy bañando...';
  setTimeout(() => {
    $agenda.textContent = 'Me estoy vistiendo...';
    setTimeout(() => {
      $agenda.textContent = 'Ahora estoy estudiando';
    }, VESTIRSE)
  }, DUCHA)
}, CORRIENDO)