const timer = document.getElementById('timer');
let counter = 0;

const interval = setInterval(() => {
  counter++;
  if (counter == 1) {
    timer.textContent = `Ha pasado ${counter} segundo`;
  } else {
    timer.textContent = `Han pasado ${counter} segundos`;
  }
}, 1000);

// timer.textContent = (counter++) === 1 ? `Ha pasado ${counter} segundo` : `Han pasado ${counter} segundos`;

const $cancelButton = document.getElementById('cancel-button');

const timeout = setTimeout(() => {
  alert('han pasado 5 segundos');
}, 5000);

$cancelButton.addEventListener('click', () => {
  clearTimeout(timeout);
});

$cancelButton.addEventListener('click', () => {
  clearInterval(interval)
});


