import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

const EjemploUno = () => {
  const { register, errors, handleSubmit } = useForm();

  const [Entradas, setEntradas] = useState([]);

  const onSubmit = (data, e) => {
    console.log(data);
    setEntradas([...Entradas, data]);
    e.target.reset();
  };

  return (
    <Fragment>
      <h1>Ejemplo #1</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          ref={register({
            required: { value: true, message: 'Campo obligatorio' },
            minLength: { value: 2, message: 'Minimo 2 letras' },
          })}
          name='titulo'
          placeholder='Ingrese titulo'
          className='form-control my-2'
          type='text'
        />

        {errors.titulo && <span className='text-danger text-small d-block mb-2'>{errors.titulo.message}</span>}

        <input
          ref={register({
            required: { value: true, message: 'Campo obligatorio' },
          })}
          name='descripcion'
          placeholder='Ingrese descripcion'
          className='form-control my-2'
          type='text'
        />

        {errors.descripcion && <span className='text-danger text-small d-block mb-2'>{errors.descripcion.message}</span>}
        <button className='btn btn-primary'>Agregar</button>
      </form>
      <ul>
        {Entradas.map((item) => (
          <li>
            {item.titulo} - {item.descripcion}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default EjemploUno;
