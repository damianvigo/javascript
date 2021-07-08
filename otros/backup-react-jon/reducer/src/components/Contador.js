import { useReducer, useState } from "react";

const initialState = { contador: 0 };

const TYPES = {
  INCREMENT: "INCREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT: "DECREMENT",
  DECREMENT_5: "DECREMENT_5",
  RESET: "RESET",
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { contador: state.contador + 1 };
    case TYPES.DECREMENT:
      return { contador: state.contador - 1 };
    default:
      return state;
  }
}

const Contador = () => {
  // const [contador, setContador] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  // const sumar = () => setContador(contador + 1);
  const sumar = () => dispatch({ type: "INCREMENT" });

  // const restar = () => setContador(contador - 1);
  const restar = () => dispatch({ type: "DECREMENT" });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador</h2>
      <nav>
        <button>+5</button>
        <button onClick={sumar}>+</button>
        <button>0</button>
        <button onClick={restar}>-</button>
        <button>-5</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default Contador;
