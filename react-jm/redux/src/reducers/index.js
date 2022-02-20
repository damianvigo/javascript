import { combineReducers } from 'redux';
import contadorReducer from './contadorReducers';

const reducer = combineReducers({
  contador: contadorReducer,
});

export default reducer;
