import React, { Component } from 'react';
import data from './../helpers/data.json';

const ancoreStyle = {
  color: 'white',
  textDecoration: 'none'
}

function ElementoLista(props) {
  return (
    <li>
      <a style={ancoreStyle} href={props.el.web} rel="noreferrer" target="_blank">{props.el.name}</a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
constructor(props) {
  super(props);
  this.state = {
    seasons: ['Primavera', 'Verano', 'Otonio', 'Invierno']
  }
}

  render() {
    // console.log(data);
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones del anio</h3>
        <ol>
          {this.state.seasons.map((el, index) => <li key={index}>{el}</li>)}
        </ol>
        <h3>Frameworks Frontend JavaScript</h3>
        <ul>
          {
            data.frameworks.map((el, index) => <ElementoLista key={el.id} el={el} />)
          }
        </ul>
      </div>
    );
  }
}