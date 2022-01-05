import React, { Component } from 'react';
import data from '../helpers/data.json';

function ElementoLista(props) {
  // console.log(props);
  return (
    <li>
      <a href={props.frameworks.web} target="_blank">
        {props.frameworks.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ['Primavera', 'Verano', 'Otonio', 'Invierno'],
    };
  }
  render() {
    // console.log(data);
    return (
      <div>
        <div>Renderizado de Elementos</div>
        <h3>Estaciones del anio</h3>
        <ol>
          {this.state.seasons.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ol>
        <h3>Frameworks</h3>
        <ul>
          {data.frameworks.map((el, index) => (
            <ElementoLista key={el.id} frameworks={el} />
          ))}
        </ul>
      </div>
    );
  }
}
