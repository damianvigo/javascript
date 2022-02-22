import { useSelector, useDispatch } from 'react-redux';
import { addToCart, clearCart, delFromCart } from '../actions/shoppingAction';
import CardItem from './CardItem';
import ProductItem from './ProductItem';

const ShoppingCart = () => {
  const state = useSelector((state) => state);
  // console.log(state);
  const dispatch = useDispatch();

  const { products, cart } = state.shopping;

  return (
    <div style={{ minHeight: '100vh' }}>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            data={product}
            addToCart={(id) => dispatch(addToCart(id))}
          />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={() => dispatch(clearCart())}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <CardItem
            key={index}
            data={item}
            delOneFromCart={(id) => dispatch(delFromCart(id))}
            delAllFromCart={(id, all) => dispatch(delFromCart(id, all))}
          />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
