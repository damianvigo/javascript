import hamburguerMenu from './modules/menu_hamburguesa.js';
import { digitalClock, alarm } from './modules/reloj.js';
import { shortcuts } from './modules/teclado.js';


const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  hamburguerMenu('.panel-btn', '.panel', '.menu a');
  digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj')
  alarm('assets/end-of-time-alan-walker.ogg', '#activar-alarma', '#desactivar-alarma')
});

d.addEventListener('keydown', e => {
  shortcuts(e);
})


