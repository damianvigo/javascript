console.log(window);
console.log(document);

// let stalker = 'Hello Stalker!';
// const speak = (stalk) => speechSynthesis.speak(new SpeechSynthesisUtterance(stalk));
// speak(stalker);

console.log('***********Elementos del Documento***************');
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement); // etiqueta html pero no el mapeo completo
console.log(document.doctype); // doctype tipo de documento
console.log(document.charset); // caracteres
console.log(document.title);
console.log(document.links); // no son arreglos, no comparte todos los metodos de los arreglos.
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);
// document.write('<h2>Hola Desde el DOM</h2>');

console.log('***********Nodos, Elementos y Selectores***************');
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('card'));
console.log(document.getElementsByName('nombre'));

console.log(document.getElementById('menu'));
console.log(document.querySelector('#menu')); // A nivel de rendimiento es mas lento que byId
console.log(document.querySelector('a'));
console.log(document.querySelectorAll('a'));
console.log(document.querySelectorAll('a').length);
document.querySelectorAll('a').forEach(el => console.log(el));
console.log(document.querySelector('.card'));
console.log(document.querySelectorAll('.card')[2]);
console.log(document.querySelector('#menu li'));
console.log(document.querySelectorAll('#menu li'));

console.log('***********Atributos, Data-Atrributes***************');
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute('lang'));
console.log(document.querySelector('.link-dom').href); // url de live server
console.log(document.querySelector('.link-dom').getAttribute('href')); // forma correcta, trae el valor del href

document.documentElement.lang = 'en';
console.log(document.documentElement.lang);
document.documentElement.setAttribute('lang', 'es-ARG'); // nombre del atributo y nuevo valor

const $linkDOM = document.querySelector('.link-dom');

$linkDOM.setAttribute('target', '_blank');
$linkDOM.setAttribute('rel', 'noopener'); // Evita que la pestaña sea insegura, buenas prácticas de marcado html
$linkDOM.setAttribute('href', 'https://damianvigo.com');
console.log($linkDOM.hasAttribute('rel')); // valida si el atributo existe en el elemento, devuelve un boolean
$linkDOM.removeAttribute('rel');
console.log($linkDOM.hasAttribute('rel'));

//Data-Attributes
console.log($linkDOM.getAttribute('data-description'));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute('data-description', 'Modelo de Objeto del Documento');
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = 'Visita mi Sitio Web';
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute('data-id'));
console.log($linkDOM.removeAttribute('data-id'));
console.log($linkDOM.hasAttribute('data-id'));

console.log('***********Estilos y variables***************');

console.log($linkDOM.style); // todas las propiedades
console.log($linkDOM.getAttribute('style')); // solo devuelve lo escrito en el atributo style
console.log($linkDOM.style.backgroundColor); // mas comodo
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM)); // un mapa de las propiedades dinamicas de css
console.log(getComputedStyle($linkDOM).getPropertyValue('color'));

$linkDOM.style.setProperty('text-decoration', 'none');
$linkDOM.style.setProperty('display', 'block');
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = 'center';
$linkDOM.style.marginLeft = 'auto';
$linkDOM.style.marginRight = 'auto';
$linkDOM.style.padding = '1rem';
$linkDOM.style.borderRadius = '.5rem';

console.log($linkDOM.style); // todas las propiedades
console.log($linkDOM.getAttribute('style')); // solo devuelve lo escrito en el atributo style
console.log(window.getComputedStyle($linkDOM));

// Variables CSS - Custom Properties CSS
const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color'),
  varYellowColor = getComputedStyle($html).getPropertyValue('--yellow-color');

  console.log(varDarkColor, varYellowColor);

  $body.style.backgroundColor = varDarkColor;
  $body.style.color = varYellowColor;

  $html.style.setProperty('--dark-color', '#000');
  varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color');  

  $body.style.setProperty('background-color', varDarkColor);