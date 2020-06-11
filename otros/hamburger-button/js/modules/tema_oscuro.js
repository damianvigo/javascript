const d = document,
  ls = localStorage;

export default function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll('[data-dark]');

  console.log($selectors);

  let moon = '🌙',
    sun = '☀️';

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $themeBtn.textContent = moon;
    ls.setItem('theme', 'light'); // actualizando el valor
  };

  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $themeBtn.textContent = sun;
    ls.setItem('theme', 'dark');
  };

  d.addEventListener('click', (e) => {
    if (e.target.matches(btn)) {
      console.log($themeBtn.textContent);
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener('DOMContentLoaded', (e) => {
    // creando variable en localstorage
    /*  if (ls.getItem('theme') === null) {
      Is.setItem('theme', 'light'); // key: value
    } */

    if (ls.getItem('theme') === null) ls.setItem('theme', 'light'); // key: value

    /*  if (Is.getItem('theme') === 'light') {
      lightMode();
    } */

    if (ls.getItem('theme') === 'light') lightMode();

    /*  if (Is.getItem('theme') === 'dark') {
      darkMode();
    } */

    if (ls.getItem('theme') === 'dark') darkMode();
  });
}
