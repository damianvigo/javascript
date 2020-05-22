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
document.querySelectorAll('a').forEach((el) => console.log(el));
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
$linkDOM.style.width = '50%';
$linkDOM.style.textAlign = 'center';
$linkDOM.style.marginLeft = 'auto';
$linkDOM.style.marginRight = 'auto';
$linkDOM.style.padding = '1rem';
$linkDOM.style.borderRadius = '.5rem';

console.log($linkDOM.style); // todas las propiedades
console.log($linkDOM.getAttribute('style')); // solo devuelve lo escrito en el atributo style
console.log(window.getComputedStyle($linkDOM));

// Variables CSS - Custom Properties CSS
const $html = document.documentElement;
//   $body = document.body;

// let varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color'),
//   varYellowColor = getComputedStyle($html).getPropertyValue('--yellow-color');

//   console.log(varDarkColor, varYellowColor);

//   $body.style.backgroundColor = varDarkColor;
//   $body.style.color = varYellowColor;

//   $html.style.setProperty('--dark-color', '#000');
//   varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color');

//   $body.style.setProperty('background-color', varDarkColor);

console.log('***********Clases***************');
const $card = document.querySelector('.card');
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains('rotate-45')); // contains devuelve un boolean
$card.classList.add('rotate-45');
console.log($card.className);
console.log($card.classList);
$card.classList.remove('rotate-45');
console.log($card.classList.contains('rotate-45'));
$card.classList.toggle('rotate-45');
console.log($card.classList.contains('rotate-45'));
$card.classList.toggle('rotate-45');
console.log($card.classList.contains('rotate-45'));
$card.classList.toggle('rotate-45');
$card.classList.replace('rotate-45', 'rotate-135');
$card.classList.add('opacity-80', 'sepia');
$card.classList.remove('opacity-80', 'sepia');
$card.classList.toggle('opacity-80', 'sepia');

console.log('************Texto y HTML**************');
const $whatIsDOM = document.getElementById('que-es');

let text = `
  <p>
  El Modelo de Objetos del Documento(<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML Y XML.
  </p>
  <p>
  Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS
  </p>
  <p>
  <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores</mark>
  </p>
`;

// $whatIsDOM.innerText = text; no es parte del estandar, se creo para ie
$whatIsDOM.textContent = text; // el estandar // insertar solo texto
$whatIsDOM.innerHTML = text; // insertando texto y codigo html
$whatIsDOM.outerHTML = text; // remplaza el elemento del dom por el contenido text

console.log('************Traversing, recorriendo el DOM**************');
/* const $cards = document.querySelector('.cards');
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousSibling); // devuelve text // es el espacio de la indentación entre el ancore y la section
console.log($cards.previousElementSibling); // el ancore
console.log($cards.nextElementSibling);
console.log($cards.children[3].closest('section')); // referenca al 3er hijo de cards, cual es la section ancestral mas cercana */

console.log('************Creando Elementos y fragmentos**************');
const $figure = document.createElement('figure'),
  $img = document.createElement('img'),
  $figcaption = document.createElement('figcaption'),
  $figcaptionText = document.createTextNode('Animals'),
  $cards = document.querySelector('.cards'),
  $figure2 = document.createElement('figure');

$img.setAttribute('src', 'https://placeimg.com/200/200/animals');
$img.setAttribute('alt', 'Animals');
$figure.classList.add('card');

$cards.appendChild($figure);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$figcaption.appendChild($figcaptionText);

$figure2.innerHTML = `
  <img src="https://placeimg.com/200/200/people" alt="People">
  <figcaption>People</figcaption>
`;

$figure2.classList.add('card');
$cards.appendChild($figure2);

const estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno'];

$ul = document.createElement('ul');

document.write('<h3>Estaciones del año</h3>');
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement('li');
  $li.textContent = el;
  $ul.appendChild($li);
});

const continentes = ['África', 'America', 'Asia', 'Europa', 'Oceania'],
  $ul2 = document.createElement('ul');

document.write('<h3>Continentes del Mundo</h3>');
document.body.appendChild($ul2);

$ul2.innerHTML = '';
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

// modo mas optimo para no pedir tanta demanda de recursos al navegador
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  $ul3 = document.createElement('ul'),
  $fragment = document.createDocumentFragment();

// modo mas optimo para no pedir tanta demanda de recursos al navegador
meses.forEach((el) => {
  const $li = document.createElement('li');
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write('<h3>Meses del año</h3>');
$ul3.appendChild($fragment);
document.body.appendChild($ul3);

console.log('**********Templates HTML***********');
const $cards2 = document.querySelector('.cards'),
  $template = document.getElementById('template-card').content,
  $fragment2 = document.createDocumentFragment(),
  cardContent = [
    {
      title: 'Tecnología',
      img: 'https://placeimg.com/200/200/tech',
    },
    {
      title: 'Animales',
      img: 'https://placeimg.com/200/200/animals',
    },
    {
      title: 'Arquitectura',
      img: 'https://placeimg.com/200/200/arch',
    },
    {
      title: 'Gente',
      img: 'https://placeimg.com/200/200/people',
    },
    {
      title: 'Naturaleza',
      img: 'https://placeimg.com/200/200/nature',
    },
  ];

cardContent.forEach((el) => {
  $template.querySelector('img').setAttribute('src', el.img);
  $template.querySelector('img').setAttribute('alt', el.title);
  $template.querySelector('figcaption').textContent = el.title;

  let $clone = document.importNode($template, true);
  $fragment2.appendChild($clone);
});

$cards2.appendChild($fragment2);

console.log('*********Modificando Elementos (Old Style)**********');
// const $cards3 = document.querySelector('.cards'),
//   $newCard = document.createElement('figure'),
//   $cloneCards = $cards3.cloneNode(true);

// $newCard.innerHTML = `
//   <img src="https://placeimg.com/200/200/any" alt="Any" />
//   `;
// $newCard.classList.add('card');

// // $cards3.replaceChild($newCard, $cards.children[2]);
// $cards3.insertBefore($newCard, $cards3.firstElementChild);
// $cards3.removeChild($cards3.lastElementChild);
// document.body.appendChild($cloneCards);

console.log('***********Modificando elementos (Cool Style)***************');
/*

InsertAdjacent...
  .insertAdjacentElement(position, el)
  .insertAdjacentHTML(position, html)
  ,insertAdjacentText(position, text)

Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/

const $cards3 = document.querySelector('.cards'),
  $newCard = document.createElement('figure');

// $newCard.innerHTML = `
//   <img src="https://placeimg.com/200/200/any" alt="Any" />
//   <figcaption>Any</figcaption>
//   `;

let $contentCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any" />  
  <figcaption></figcaption>
  `;

$newCard.classList.add('card');

// $cards3.insertAdjacentElement('beforebegin', $newCard);
$cards3.insertAdjacentElement('afterbegin', $newCard);
// $cards3.insertAdjacentElement('beforeend', $newCard);
// $cards3.insertAdjacentElement('afterend', $newCard);

$newCard.insertAdjacentHTML('beforeend', $contentCard); // da lo mismo afterbegin o beforebegin
$newCard.querySelector('figcaption').insertAdjacentText('afterbegin', 'Any');

// jQuery metodos nativos en js
// $cards3.prepend($newCard);  // primer hijo
// $cards3.before($newCard);  // hermano anterior de la section cards
// $cards3.append($newCard); // ultimo hijo
// $cards3.after($newCard); // hermano posterior de la section cards

console.log('***************Events**************');
/* function Hey() {
  alert('Hey');
  console.log(event);
}

const $eventoSemantico = document.getElementById('evento-semantico');

$eventoSemantico.onclick = Hey;
$eventoSemantico.onclick = function (e) {
  alert('Manejador de eventos semántico');
  console.log(e);
  console.log(event);
};

function saludar(nombre = 'Desconocido') {
  alert(`Hola ${nombre}`);
  console.log(event);
}

const $eventomultiple = document.getElementById('evento-multiple');
$eventomultiple.addEventListener('click', Hey);
$eventomultiple.addEventListener('click', (e) => {
  alert('Manejador de eventos múltiples');
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});

$eventomultiple.addEventListener('click', () => {
  saludar();
  saludar('Dami');
});

//

const $eventoRemover = document.getElementById('evento-remover');

const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener('dblclick', removerDobleClick);
  $eventoRemover.disabled = true;
};

$eventoRemover.addEventListener('dblclick', removerDobleClick);
 */

const $divsEventos = document.querySelectorAll('.eventos-flujo div'),
  $linkEventos = document.querySelector('.eventos-flujo a'); // primer enlace

function flujoEventos(e) {
  console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
  e.stopPropagation();
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
  // estan relacionados con el tercer parametro de la fn addEventListener
  // Fase de burbuja // del elemento interno al externo
  div.addEventListener('click', flujoEventos); // por defecto en false
  // div.addEventListener('click', flujoEventos, false); // tercer parametro por defecto en false explicito
  // Fase de captura // del elemento exterior al interior
  // div.addEventListener('click', flujoEventos, true);
  // div.addEventListener('click', flujoEventos, {
  //   capture: false,
  //   once: true,  se ejecuta una sola vez
  // });
});

$linkEventos.addEventListener('click', (e) => {
  alert('Hola');
  e.preventDefault();
  e.stopPropagation();
});

console.log('*************stopPropagation & preventDefault***************');
