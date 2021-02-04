import React, { useState } from 'react';
import './App.css';
import FormularioTareas from './components/FormularioTareas';
import Header from './components/Header';

const App = () => {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      texto: 'Reunion a las 14:00',
      completada: false,
    },
    {
      id: 2,
      texto: 'Ir a correr a las 18:00',
      completada: false,
    },
  ]);

  console.log(tareas);

  return (
    <div className='contenedor'>
      <Header />
      <FormularioTareas tareas={tareas} setTareas={setTareas} />
    </div>
  );
};

export default App;
