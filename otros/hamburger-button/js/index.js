import hamburguerMenu from './modules/menu_hamburguesa.js';
import { digitalClock, alarm } from './modules/reloj.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  hamburguerMenu('.panel-btn', '.panel', '.menu a');
  digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj')
  alarm('assets/end-of-time-alan-walker.ogg', '#activar-alarma', '#desactivar-alarma')
});


