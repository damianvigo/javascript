import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

const Tarea = ({ tarea, editTarea, toggleCompletada, borrarTarea }) => {
  const [editandoTarea, setEditTarea] = useState(false);
  const [nuevaTarea, setNuevaTarea] = useState(tarea.texto);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTarea(tarea.id, nuevaTarea);
    setEditTarea(false);
  }

  return (
    <li className='lista-tareas__tarea'>
      <FontAwesomeIcon
        icon={tarea.completada ? faCheckSquare : faSquare}
        className='lista-tareas__icono
    lista-tareas__icono-check'
      onClick={() => toggleCompletada(tarea.id)}
      />
      <div className='lista-tareas__texto'>
        {editandoTarea ? (
          <form action='' className='formulario-editar-tarea'
          onSubmit={handleSubmit}>
            <input
              type='text'
              className='formulario-editar-tarea__input'
              value={nuevaTarea}
              onChange={(e) => setNuevaTarea(e.target.value)}
            />
            <button type='submit' className='formulario-editar-tarea__btn'>
              Actualizar
            </button>
          </form>
        ) : (
          <p>{tarea.texto}</p>
        )}
      </div>
      <div className='lista-tareas__contendor-botones'>
        <FontAwesomeIcon
          icon={faEdit}
          className='lista-tareas__icono lista-tareas__icono-accion 
    lista-tareas__icono-check'
          onClick={() => setEditTarea(!editandoTarea)}
        />
        <FontAwesomeIcon icon={faTimes} className='lista-tareas__icono lista-tareas__icono-accion' onClick={() => borrarTarea(tarea.id)} />
      </div>
    </li>
  );
};

export default Tarea;
