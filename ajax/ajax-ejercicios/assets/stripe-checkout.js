import STRIPE_KEYS from './stripe-keys.js';
// console.log(STRIPE_KEYS);

const d = document,
  $tacos = d.getElementById('tacos'),
  $template = d.getElementById('taco-template').content,
  /* En el template lo que me interesa es el el contenido del template, NO la referencia de la etiqueta del DOM */
  $fragment = d.createDocumentFragment();

fetch('https://api.stripe.com/v1/products', {
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`,
  },
})
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((json) => console.log(json));

fetch('https://api.stripe.com/v1/prices', {
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`,
  },
})
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((json) => console.log(json));
