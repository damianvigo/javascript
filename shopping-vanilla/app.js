const d = document,
  $carrito = d.getElementById('carrito'),
  $template = d.getElementById('template'),
  fragment = d.createDocumentFragment(),
  $btnesBotones = d.querySelectorAll('.btn');

const carritoObjeto = {};

const agregarAlCarrito = (e) => {
  // console.log(e.target.dataset.fruta);

  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };

  if (carritoObjeto.hasOwnProperty(producto.id)) {
    producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
    console.log(carritoObjeto);
  }

  carritoObjeto[producto.titulo] = producto;

  pintarCarrito();

  console.log(carritoObjeto);
};

const pintarCarrito = () => {
  console.log(Object.values(carritoObjeto));

  console.log($carrito);
  $carrito.textContent = '';

  Object.values(carritoObjeto).forEach((item) => {
    const clone = $template.content.firstElementChild.cloneNode(true);
    clone.querySelector('.lead').textContent = item.titulo;
    clone.querySelector('.badge').textContent = item.cantidad;

    fragment.appendChild(clone);
  });

  $carrito.appendChild(fragment);
};

$btnesBotones.forEach((btn) => btn.addEventListener('click', agregarAlCarrito));
