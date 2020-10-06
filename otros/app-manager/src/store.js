import { createStore } from 'redux';

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: 'Manuel Neuer',
      foto: 'https://img.bundesliga.com/tachyon/sites/2/2020/04/FCBBSC_SimonHofmann_1040.jpg?crop=0px,0px,1920px,1080px&fit=1140',
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
    {
      id: 4,
      nombre: 'Lionel Messi',
      foto:
        'https://www.fcbarcelona.com/photo-resources/2019/09/26/43931b52-6dcb-4f1e-8fba-81e5b688f11a/10_MESSI_JUGADORS-WEB.jpg?width=1200&height=750',
    },
    {
      id: 5,
      nombre: 'Sergio Ramos',
      foto: 'https://m.zeleb.es/sites/default/files/styles/news_main_image/public/sergio_ramos_4.jpg?itok=MAnC7H3f',
    },
    {
      id: 6,
      nombre: 'Gerard Piqué',
      foto:
        'https://www.mundodeportivo.com/r/GODO/MD/p6/Barca/Imagenes/2019/03/08/Recortada/1133235525_20190302205051539-kPHF-U46913272267ZTH-980x554@MundoDeportivo-Web.jpg',
    },
    {
      id: 7,
      nombre: 'Andrés Iniesta',
      foto: 'https://ep01.epimg.net/deportes/imagenes/2018/05/07/actualidad/1525721871_218426_1525726688_noticia_normal.jpg',
    },
    {
      id: 8,
      nombre: 'Franck Ribéry',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSe3THSyciINMViGTSF_sV1w8qrkwsFUyUzIQ&usqp=CAU',
    },
    {
      id: 9,
      nombre: 'Arjen Robben',
      foto:
        'https://assets.soyfutbol.com/__export/1588016570978/sites/debate/img/2020/04/27/jam_m_132079_crop1588016570162.jpg_943222218.jpg',
    },
    {
      id: 10,
      nombre: 'Luka Modrić',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/ISL-HRV_%287%29.jpg',
    },
    {
      id: 11,
      nombre: 'Antoine Griezmann',
      foto:
        'https://www.fcbarcelona.com/photo-resources/2019/09/26/82614aaa-24ce-47ea-a0bb-ffda61abc83c/17_GRIEZMANN_JUGADORS-WEB.jpg?width=1200&height=750',
    },
    {
      id: 12,
      nombre: 'Cristiano Ronaldo',
      foto: 'https://as.com/tikitakas/imagenes/2020/10/05/portada/1601919185_245348_1601919417_noticia_normal_recorte1.jpg',
    },
    {
      id: 13,
      nombre: 'Robert Lewandowski',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgs9jaTyNuIo08nZxbho3EIKm-6vxUn892Bw&usqp=CAU',
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

  if (action.type === 'QUITAR_TITULAR') {
    return {
      ...state,
      titulares: state.titulares.filter((j) => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador),
    };
  }

  if (action.type === 'QUITAR_SUPLENTE') {
    return {
      ...state,
      suplentes: state.suplentes.filter((j) => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador),
    };
  }

  return state;
};

export default createStore(reducerEntrenador);
