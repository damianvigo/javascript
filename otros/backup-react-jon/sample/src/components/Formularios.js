import React, { useState } from 'react';

/* export default function Formularios() {
  const [nombre, setNombre] = useState('');
  const [sabor, setSabor] = useState('');
  const [lenguaje, setLenguaje] = useState('');
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('sending...')
  }

  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='nombre'>Nombre: </label>
        <input type='text' id='nombre' name='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <p>Elige tu Sabor JS Favorito:</p>

        <input type='radio' defaultChecked id='vanilla' name='sabor' onChange={(e) => setSabor(e.target.value)} value='vanilla' />
        <label htmlFor='vanilla'>Vanilla</label>

        <input type='radio' id='react' name='sabor' onChange={(e) => setSabor(e.target.value)} value='react' />
        <label htmlFor='react'>React</label>

        <input type='radio' id='angular' name='sabor' onChange={(e) => setSabor(e.target.value)} value='angular' />
        <label htmlFor='angular'>Angular</label>

        <input type='radio' id='vue' name='sabor' onChange={(e) => setSabor(e.target.value)} value='vue' />
        <label htmlFor='vue'>Vue</label>

        <input type='radio' id='svelte' name='sabor' value='svelte' onChange={(e) => setSabor(e.target.value)} />
        <label htmlFor='svelte'>Svelte</label>

        <p>Elige tu lenguaje de programacion favorito</p>
        <select name='lenguaje' onChange={(e) => setLenguaje(e.target.value)}>
          <option defaultValue='' value=''>---</option>
          <option value='js'>JavaScript</option>
          <option value='php'>PHP</option>
          <option value='py'>Python</option>
          <option value='go'>GO</option>
          <option value='rb'>Ruby</option>
        </select>

        <br />

        <label htmlFor="terminos">Acepto y terminos y condiciones</label>
        <input type="checkbox" id='terminos' name='terminos' onChange={(e) => setTerminos(e.target.checked)} />

        <input type="submit"/>
      </form>
    </>
  );
} */

export default function Formularios() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('sending...');
  };

  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='nombre'>Nombre: </label>
        <input type='text' id='nombre' name='nombre' onChange={handleChange} />
        <p>Elige tu Sabor JS Favorito:</p>

        <input type='radio' defaultChecked id='vanilla' name='sabor' onChange={handleChange} value='vanilla' />
        <label htmlFor='vanilla'>Vanilla</label>

        <input type='radio' id='react' name='sabor' onChange={handleChange} value='react' />
        <label htmlFor='react'>React</label>

        <input type='radio' id='angular' name='sabor' onChange={handleChange} value='angular' />
        <label htmlFor='angular'>Angular</label>

        <input type='radio' id='vue' name='sabor' onChange={handleChange} value='vue' />
        <label htmlFor='vue'>Vue</label>

        <input type='radio' id='svelte' name='sabor' value='svelte' onChange={handleChange} />
        <label htmlFor='svelte'>Svelte</label>

        <p>Elige tu lenguaje de programacion favorito</p>
        <select name='lenguaje' onChange={handleChange}>
          <option defaultValue='' value=''>
            ---
          </option>
          <option value='js'>JavaScript</option>
          <option value='php'>PHP</option>
          <option value='py'>Python</option>
          <option value='go'>GO</option>
          <option value='rb'>Ruby</option>
        </select>

        <br />

        <label htmlFor='terminos'>Acepto y terminos y condiciones</label>
        <input type='checkbox' id='terminos' name='terminos' onChange={handleChecked} />

        <input type='submit' />
      </form>
    </>
  );
}
