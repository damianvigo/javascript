export function Menu() {
  const $menu = document.createElement('nav');
  $menu.classList.add('menu');
  $menu.innerHTML = `
    <a href='#/'>Home</a>
    <span>-</span>
    <a href='#/search'>Busqueda</a>
    <span>-</span>
    <a href='#/contacto'>Contacto</a>
    <span>-</span>
    <a href='https://frontendmasters.com/books/front-end-handbook/2019/#3.2' target='_blank' rel='noopener'>Front-End Web Designer</a>
  `;
  return $menu;
}