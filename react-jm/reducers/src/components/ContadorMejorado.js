import { useReducer } from 'react';
import { TYPES } from '../actions/contadorActions';
import {
  ContadorInit,
  contadorInitialState,
  contadorReducer,
} from '../reducers/contadorReducer';
// initialState se sugiere que sea un objeto porque es un state como el de los class components

const ContadorMejorado = () => {
  const [state, dispatch] = useReducer(
    contadorReducer,
    contadorInitialState,
    ContadorInit
  );

  const sumar = () => dispatch({ type: TYPES.INCREMENT });

  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 50 });

  const restar = () => dispatch({ type: TYPES.DECREMENT });

  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });

  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div>
      <h2>Contador Mejorado Reducer</h2>
      <nav>
        <button onClick={sumar5}>+5</button>
        <button onClick={sumar}>+</button>
        <button onClick={reset}>0</button>
        <button onClick={restar}>-</button>
        <button onClick={restar5}>-5</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default ContadorMejorado;
