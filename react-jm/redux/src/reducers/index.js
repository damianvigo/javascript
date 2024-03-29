import { combineReducers } from 'redux';
import contadorReducer from './contadorReducers';
import { crudReducer } from './crudReducer';
import { shoppingReducer } from './shoppingReducer';

const reducer = combineReducers({
  contador: contadorReducer,
  shopping: shoppingReducer,
  crud: crudReducer,
});

export default reducer;
