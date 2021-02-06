import React, { useState, useEffect } from 'react';
import './App.css';
import FormularioTareas from './components/FormularioTareas';
import Header from './components/Header';
import ListaTareas from './components/ListaTareas';

const App = () => {
  const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) ? JSON.parse(localStorage.getItem('tareas')) : [];

  const [tareas, setTareas] = useState(tareasGuardadas);

  console.log(tareas);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  let configMostrarCompletadas = '';
  if (localStorage.getItem('mostrarCompletadas') === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  const [mostrarCompletadas, setMostrarCompletadas] = useState(configMostrarCompletadas);
  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  return (
    <div className='contenedor'>
      <Header mostrarCompletadas={mostrarCompletadas} setMostrarCompletadas={setMostrarCompletadas} />
      <FormularioTareas tareas={tareas} setTareas={setTareas} />
      <ListaTareas mostrarCompletadas={mostrarCompletadas} tareas={tareas} setTareas={setTareas} />
    </div>
  );
};

export default App;
