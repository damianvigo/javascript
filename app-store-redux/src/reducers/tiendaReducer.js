const estadoInicial = {
  productos: [
    { id: 1, nombre: 'Producto 1' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' },
    { id: 4, nombre: 'Producto 4' },
  ],

  carrito: [],
};

const reducer = (estado = estadoInicial, accion) => {
  switch (accion.type) {
    case 'AGREGAR_PRODUCTO_AL_CARRITO':
      const { nombre, idProductoAAgregar } = accion;
      // Si el carrito no tiene elementos, agrego uno.
      if (estado.carrito.length === 0) {
        return {
          ...estado,
          carrito: [{ id: idProductoAAgregar, nombre: nombre, cantidad: 1 }],
        };
      } else {
        // Reviso que el carrito que no tenga ya el producto a agregar
        // Si ya lo tiene actualizar el valor
        // Si no lo tiene lo agrego

        // Para poder editar el array lo clono
        const nuevoCarrito = [...estado.carrito];
        console.log(nuevoCarrito);

        // Compruebo si el carrito ya tiene el id del producto a agregar
        const yaEstaEnCarrito =
          nuevoCarrito.filter((productoDeCarrito) => {
            return productoDeCarrito.id === idProductoAAgregar;
          }).length > 0;
        console.log(yaEstaEnCarrito); // true

        // Si ya tiene el producto entonces lo actualizo
        if (yaEstaEnCarrito) {
          // Lo busco. obtengo su posicion en el array.
          // y en base a la posicion actualizo el valor.
          nuevoCarrito.forEach((productoDeCarrito, index) => {
            if (productoDeCarrito.id === idProductoAAgregar) {
              const cantidad = nuevoCarrito[index].cantidad;
              console.log(nuevoCarrito[index]);
              nuevoCarrito[index] = { id: idProductoAAgregar, nombre: nombre, cantidad: cantidad + 1 };
            }
          });
          // agrego el producto al array
        } else {
          nuevoCarrito.push({ id: idProductoAAgregar, nombre: nombre, cantidad: 1 });
        }

        return {
          ...estado,
          carrito: nuevoCarrito,
        };
      }
   
    default:
      return estado;
  }
};

export default reducer;
