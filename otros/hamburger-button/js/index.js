import hamburguerMenu from './modules/menu_hamburguesa.js';
import { digitalClock, alarm } from './modules/reloj.js';
import { moveBall, shortcuts } from './modules/teclado.js';
import countdown from './modules/cuenta_regresiva.js';
import scrollTopButton from './modules/boton_scroll.js';
import darkTheme from './modules/tema_oscuro.js';
import responsiveMedia from './modules/objeto_responsive.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  hamburguerMenu('.panel-btn', '.panel', '.menu a');
  digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
  alarm('assets/end-of-time-alan-walker.ogg', '#activar-alarma', '#desactivar-alarma');
  // countdown('countdown', 'dic 25, 2020 00:00:00', 'Merry Christmas');
  scrollTopButton('.scroll-top-btn');
  responsiveMedia('youtube', '(min-width: 1024px)', 'Contenido Móvil', 'Contenido Escritorio');
  responsiveMedia('gmaps', '(min-width: 1024px)', 'Contenido Móvil', 'Contenido Escritorio');
});

d.addEventListener('keydown', (e) => {
  shortcuts(e);
  moveBall(e, '.ball', '.stage');
});

darkTheme('.dark-theme-btn', 'dark-mode');
