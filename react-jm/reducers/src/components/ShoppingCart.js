import { useReducer } from 'react';
import { TYPES } from '../actions/shoppingAction';
import {
  shoppingInitialState,
  shoppingReducer,
} from '../reducers/shoppingReducer';
import CardItem from './CardItem';
import ProductItem from './ProductItem';

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  /*  console.log(shoppingInitialState);
  console.log(products); */

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const delFromCart = (id, all = false) => {
    // console.log(id, all);
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={clearCart}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <CardItem key={index} data={item} delFromCart={delFromCart} />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
