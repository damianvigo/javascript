export function Loader() {
  const $loader = document.createElement('img');
  $loader.alt = 'Cargando...';
  $loader.src = '../assets/ball-triangle.svg';
  $loader.classList.add('loader');

  return $loader;
}
