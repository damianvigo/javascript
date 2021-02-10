import React, { useState } from 'react';

// contexto = estado global
const ContextoTema = React.createContext();

const ProovedorTema = ({ children }) => {
  const [tema, setTema] = useState({
    alineado: 'center',
    fuente: 30,
  });

  const aumentarFuente = () => setTema({ ...tema, fuente: tema.fuente + 1 });
  const disminuirFuente = () => setTema({ ...tema, fuente: tema.fuente - 1 });

  const alinearIzquierda = () => setTema({ ...tema, alineado: 'left' });
  const alinearCentro = () => setTema({ ...tema, alineado: 'center' });
  const alinearDerecha = () => setTema({ ...tema, alineado: 'right' });

  return (
    <ContextoTema.Provider value={{ tema, aumentarFuente, disminuirFuente, alinearIzquierda, alinearCentro, alinearDerecha }}>
      {children}
    </ContextoTema.Provider>
  );
};

export { ContextoTema, ProovedorTema };
