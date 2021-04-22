import React, { useState } from 'react';
import SelectList from './SelectList';

const SelectsAnidados = () => {
  const [state, setState] = useState('');
  const [town, setTown] = useState('');
  const [suburb, setSuburb] = useState('');

  const TOKEN = 'e1369cf8-f8d0-4933-8e1d-e8bebe2745d4';

  return (
    <div>
      <h2>Selects Anidados</h2>
      <h3>Mexico</h3>
      <pre>
        <SelectList
          title='estado'
          url={`https://api-sepomex.hckdrk.mx/query/get_estados?token=${TOKEN}`}
          handleChange={(e) => {
            setState(e.target.value);
          }}
        />
        {state && (
          <SelectList
            title='municipios'
            url={`https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
            handleChange={(e) => {
              setTown(e.target.value);
            }}
          />
        )}
        {town && (
          <SelectList
            title='colonia'
            url={`https://api-sepomex.hckdrk.mx/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
            handleChange={(e) => {
              setSuburb(e.target.value);
            }}
          />
        )}
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;
