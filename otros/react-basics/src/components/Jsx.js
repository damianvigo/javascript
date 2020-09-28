import React, { Fragment, useState } from 'react';

const Jsx = () => {
  //const saludo = 'Hola JSX'
  const temperatura = 21;

  return (
    <Fragment>
      <h2>Frio o calor?</h2>
      <h4>{temperatura > 20 ? 'Calor' : 'Frio'}</h4>
    </Fragment>
  );
};

export default Jsx;
