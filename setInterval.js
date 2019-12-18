const timer = document.getElementById('timer');
let counter = 0;

setInterval(() => {
  counter++;
  if (counter == 1) {
    timer.textContent = `Ha pasado ${counter} segundo`; 
  } else {
    timer.textContent = `Han pasado ${counter} segundos`; 
  }
}, 1000);

// timer.textContent = (counter++) === 1 ? `Ha pasado ${counter} segundo` : `Han pasado ${counter} segundos`;
