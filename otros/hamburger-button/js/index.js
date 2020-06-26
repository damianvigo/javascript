import hamburguerMenu from './modules/menu_hamburguesa.js';
import { digitalClock, alarm } from './modules/reloj.js';
import { moveBall, shortcuts } from './modules/teclado.js';
import countdown from './modules/cuenta_regresiva.js';
import scrollTopButton from './modules/boton_scroll.js';
import darkTheme from './modules/tema_oscuro.js';
import responsiveMedia from './modules/objeto_responsive.js';
import responsiveTester from './modules/prueba_responsive.js';
import userDeviceInfo from './modules/deteccion_dispositivos.js';
import networkStatus from './modules/deteccion_red.js';
import webCam from './modules/deteccion_webcam.js';
import getGeolocation from './modules/geolocalizacion.js';
import searchFilters from './modules/filtro_busquedas.js';
import draw from './modules/sorteo.js';
import slider from './modules/carrusel.js';
import scrollSpy from './modules/scroll_espia.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  hamburguerMenu('.panel-btn', '.panel', '.menu a');
  digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
  alarm('assets/end-of-time-alan-walker.ogg', '#activar-alarma', '#desactivar-alarma');
  // countdown('countdown', 'dic 25, 2020 00:00:00', 'Merry Christmas');
  scrollTopButton('.scroll-top-btn');
  responsiveMedia(
    'youtube',
    '(min-width: 1024px)',
    `<a href="https://www.youtube.com/watch?v=Oj18EikZMuU" target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/Oj18EikZMuU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    'gmaps',
    '(min-width: 1024px)',
    `<a href="https://goo.gl/maps/75f9Y64oLKKfHQsY9" target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887889461!2d-58.38375908423685!3d-34.60373446500705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1592017701759!5m2!1ses-419!2sar" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
  );
  // usandogetElementById no necesita poner el hash
  responsiveTester('responsive-tester');
  userDeviceInfo('user-device');
  webCam('webcam');
  getGeolocation('geolocation');
  searchFilters('.card-filter', '.card');
  draw('#winner-btn', '.player');
  slider();
  scrollSpy();
});

d.addEventListener('keydown', (e) => {
  shortcuts(e);
  moveBall(e, '.ball', '.stage');
});

darkTheme('.dark-theme-btn', 'dark-mode');
networkStatus();
