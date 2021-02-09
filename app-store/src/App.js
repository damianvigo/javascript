import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, Switch, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Blog from './components/Blog';
import Tienda from './components/Tienda';
import Error404 from './components/Error404';
import Carrito from './components/Carrito';

const App = () => {
  const productos = [
    { id: 1, nombre: 'Producto 1' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' },
    { id: 4, nombre: 'Producto 4' },
  ];

  const [carrito, setCarrito] = useState([]);

  const agregarProductoAlCarrito = (idProductoAAgregar, nombre) => {
    if (carrito.length === 0) {
      setCarrito([{ id: idProductoAAgregar, nombre: nombre, cantidad: 1 }]);
    } else {
      // Reviso que el carrito que no tenga ya el producto a agregar
      // Si ya lo tiene actualizar el valor
      // Si no lo tiene lo agrego

      // Para poder editar el array lo clono
      const nuevoCarrito = [...carrito];
      console.log(nuevoCarrito)

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
        nuevoCarrito.push(
          {id: idProductoAAgregar,
          nombre: nombre,
          cantidad: 1
        }
        );
      }
      // actualizar el carrito
      setCarrito(nuevoCarrito);
    }
  };

  return (
    <Contenedor>
      <Menu>
        <NavLink to='/'>Inicio</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
        <NavLink to='/tienda'>Tienda</NavLink>
      </Menu>
      <main>
        <Switch>
          <Route path='/' exact={true} component={Inicio} />
          <Route path='/blog' component={Blog} />
          <Route path='/tienda'>
            <Tienda productos={productos} agregarProductoAlCarrito={agregarProductoAlCarrito} />
          </Route>
          <Route component={Error404} />
        </Switch>
      </main>
      <aside>
        <Carrito carrito={carrito} />
      </aside>
    </Contenedor>
  );
};

const Contenedor = styled.div`
  max-width: 1000px;
  padding: 40px;
  width: 90%;
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 40px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #092c4c;
  grid-column: span 2;
  border-radius: 3px;

  a {
    color: #fff;
    display: inline-block;
    padding: 15px 20px;
  }

  a:hover {
    background: #1d85e8;
    text-decoration: none;
  }
`;

export default App;
