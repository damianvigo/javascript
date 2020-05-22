const privateKey = '2cb0096e225a6a88cebf049ee4edb8d5d477fb65',
  publicKey = '649db69cc5cd67450191982a064b532e',
  content = document.getElementById('content'),
  search = document.getElementById('search');

const getConnection = () => {
  const ts = Date.now(),
    hash = md5(ts + privateKey + publicKey),
    URL = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  fetch(URL)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      response.data.results.forEach((e) => {
        drawHero(e);
      });
    })
    .catch((e) => console.log(e));
};

const drawHero = (e) => {
  const image = `${e.thumbnail.path}/portrait_uncanny.${e.thumbnail.extension}`;
  const hero = `
    <div class="consume">
      <h3 class="consume__name">${e.name}</h3>
      <div class="consume__img">
        <img class"consume__thumbnail" src="${image}">
      <p class="consume__description">${e.description}</p>
      </div>
    </div>
  `;
  content.insertAdjacentHTML('beforeEnd', hero);
};

const searchHero = (name) => {
  const ts = Date.now(),
    hash = md5(ts + privateKey + publicKey),
    hero = encodeURIComponent(name); // Sin encodeURIComponent buscaria ej iron%20man. Con encodeURIComponent acepta los espacios
  URL = `https://gateway.marvel.com/v1/public/characters?name=${hero}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  fetch(URL)
    .then((response) => response.json())
    .then((response) => {
      response.data.results.forEach((e) => {
        drawHero(e);
      });
    })
    .catch((e) => console.log(e));
};

search.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    content.innerHTML = '';
    searchHero(e.target.value.trim());
  }
});

getConnection();
