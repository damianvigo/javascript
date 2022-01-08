import React, { useState, useEffect } from 'react';

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);
  const [name, setName] = useState('dvdev');

  useEffect(() => {
    //  console.log('Moviendo el Scroll');

    const detectarScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener('scroll', detectarScroll);

    return () => {
      window.removeEventListener('scroll', detectarScroll);
    };
  }, [scrollY]); // solo con scrollY

  useEffect(() => {
    // console.log('Fase de Montaje');
  }, []); // didmount

  useEffect(() => {
    //  console.log('Fase de Actualizacion');
  });

  useEffect(() => {
    return () => {
      // desuscribir de servicios, desconectar de api, limpiar intervalos de tiempo, limpiar manejadores de eventos
      //   console.log('Fase de Desmontaje');
    };
  });

  return (
    <>
      <h2>Hooks - useEffect y el Ciclo de Vida</h2>
      <p>Scroll Y del Navegador {scrollY}px</p>
    </>
  );
}
