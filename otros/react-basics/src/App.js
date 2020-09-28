import React from 'react';
import Contador from './components/Contador';
import Jsx from './components/Jsx';
import Formulario from './components/Formulario';
import FormHook from './components/FormHook';
import EjemploUno from './components/EjemploUno';
import Lista from './components/Lista';
import Saludo from './components/Saludo';
import Comentario from './components/Comentario';

function App() {
  const sujeto = {
    nombre: 'Paola',
    urlImagen: 'https://via.placeholder.com/64',
    texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  };

  return (
    <div>
      {/*     <h1>Hey</h1>
      <Contador />
      <Jsx />
      <Lista /> */}
      <div className='container mt-5'>
        {/*  <Formulario /> */}
        {/*   <FormHook /> */}
        {/*   <EjemploUno /> */}
        <Saludo persona='user-one' />
        <Saludo persona='user-one' />
        <Saludo persona='user-three' />
        <Comentario sujeto={sujeto} />
        <Comentario sujeto={sujeto} />
      </div>
    </div>
  );
}

export default App;
