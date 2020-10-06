import { createStore } from 'redux';

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: 'Cristiano Ronaldo',
      foto: 'https://as.com/tikitakas/imagenes/2020/10/05/portada/1601919185_245348_1601919417_noticia_normal_recorte1.jpg',
    },
    {
      id: 2,
      nombre: 'Wesley Sneijder',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Wesley2012.JPG',
    },
    {
      id: 3,
      nombre: 'Toni Kroos',
      foto: 'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2020/04/09/toni-kroos.jpeg',
    },
  ],
  titulares: [],
  suplentes: [],
};

const reducerEntrenador = (state = initialState, action) => {
  console.log(action);

  if (action.type === 'AGREGAR_TITULAR') {
    return {
      ...state,
      titulares: state.titulares.concat(action.jugador),
      jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
    };
  }

  if (action.type === 'AGREGAR_SUPLENTE') {
    return {
      ...state,
      suplentes: state.suplentes.concat(action.jugador),
      jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
    };
  }

  return state;
};

export default createStore(reducerEntrenador);
