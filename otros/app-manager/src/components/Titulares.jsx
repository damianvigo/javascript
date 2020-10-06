import React from 'react';
import { connect } from 'react-redux';
import cancha from '../assets/cancha.svg';

const Titulares = ({ titulares, quitarTitular }) => (
  <section>
    <h2>Titulares</h2>
    <div className='cancha'>
      {titulares.map((j) => (
        <article className='titular' key={j.id}>
          <figure>
            <img src={j.foto} alt={j.nombre} />
            <button onClick={() => quitarTitular(j)}>X</button>
          </figure>
          <p>{j.nombre}</p>
        </article>
      ))}
      <img src={cancha} alt='Cancha de futbol' />
    </div>
  </section>
);

const mapStateToProps = (state) => ({
  titulares: state.titulares,
});

const mapDispatchToProps = (dispatch) => ({
  quitarTitular(jugador) {
    dispatch({
      type: 'QUITAR_TITULAR',
      jugador,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);
