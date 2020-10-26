import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DefaultProps from './DefaultProps';
import Contador, { ContadorNumero } from './State';
import Forms from './sections/Forms'
import ConditionalSection from './sections/conditional';
import cars from './data/cars.json'; // especificar la extension json
import { render } from '@testing-library/react';
import PropTypes from 'prop-types'

/* function Hello(props) {
  return <h2>{props.title}</h2>;
} */

// const Hello = (props) => <h2>{props.title}</h2>;

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>;
  }
}

class Text extends Component {
  render() {
    const { isActivated, arrayOfNumbers, multiply } = this.props; // con destructuracion para no usar this y que sea mas facil de usar las props

    /* const textSegunBool = this.props.isActivated ? 'On' : 'Off';
    const mappedNumbers = this.props.arrayOfNumbers.map(this.props.multiply); */

    // const textoSegunBool = isActivated ? 'On' : 'Off';
    const mappedNumbers = arrayOfNumbers.map(multiply);

    // this.props.title = <h3>No se puede, las props son inmutables es decir no se pueden modificar</h3>

    return (
      <div>
        {/*  <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{textSegunBool}</p> */}
        {/* <p>{this.props.arrayOfNumbers.join(', ')}</p> */}
        {this.props.title}
        <p>{mappedNumbers.join(', ')}</p>
        <p>{this.props.objectWithInfo}</p>
      </div>
    );
  }
}

class CarItem extends Component {
  render () {
    const { car, id } = this.props

    return (
      <li>
      {/*   <p>
          key: {key}
        </p> NO es accesible se usa de forma interna en react*/ }
        <p>key: {id}</p>
        <p>
          <strong>Nombre: </strong>
          {car.name}
        </p>
        <p>
          <strong>Marca: </strong>
          {car.company}
        </p>
      </li>
    );
  }
}

class Box extends Component {
  render() {
    return (
      <div style={{border: '1px solid 09f', margin: 5, padding: 5}}>
        {this.props.children}
      </div>
    )
  }
}

class Article extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    if (typeof props.author === 'undefined') {
      console.warn('author props is required')
      throw new Error('author prop is required')
    }
  }
  render() {

    const { author, children, date, title } = this.props

    return (
      <section>
        <h2>{title}</h2>
        {author &&<p><em>Escrito por {author}</em></p>}
        <Box>{date}</Box>
        <article>
          {children}
        </article>
      </section>
    )
  }
}

/* Article.propTypes = {
  author: PropTypes.string
} */

function App() {
  const numbers = [1, 1, 2, 3, 4, 5];
  
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Hello title='Hey' />
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
        <Text
          arrayOfNumbers={[2, 3, 10]}
          // objectWithInfo={ {key: 'First Value', key2: 'otherValue'} }
          // isActivated
          multiply={(number) => number * 4}
          number={2}
          text='texto en string'
          title={<h1>Este es un elemento de react como prop</h1>}
        />
        <DefaultProps text='Otro titulo desde props' />
        {/*  <Contador contadorInicial={100} />
        <ContadorNumero /> */}
      </header>

      <div>
        <ConditionalSection />
      </div>

      <div>
        <h2>trabajando con listas</h2>
        {numbers.map((number, index) => {
          return (
            <p key={number}>
              Soy el numero {number} y mi indice es {index}
            </p>
          );
        })}
      </div>

      <div>
        <h3>Trabajando con listas con objetos</h3>
        <ul>
          {cars.map((car) => {
            return <CarItem id={car.id} car={car} />
          })}
        </ul>
      </div>
      <div>
       <Forms />
      </div>
          <Article author={true} date={new Date().toLocaleDateString()} title="Articulo sobre la prop children">
            <p>El contenido que envolvemos dentro del componente Article sera enviado al componente como this.props.children</p>
            <strong>Y mantiene las etiquetas que hay aniado dentro</strong>
          </Article>
    </div>
  );
}

export default App;
