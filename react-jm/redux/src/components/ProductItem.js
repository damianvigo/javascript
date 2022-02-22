const ProductItem = (props) => {
  // console.log(props);
  let { id, name, price } = props.data;
  return (
    <div style={{ border: 'thin solid gray', padding: '1rem' }}>
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <button onClick={() => props.addToCart(id)}>Agregar</button>
    </div>
  );
};

export default ProductItem;
