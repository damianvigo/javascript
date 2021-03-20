import React from 'react'
import logo from './logo.svg';
import Componente from './components/Componente';
import './App.css';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosES6, EventosES7, MasSobreEventos } from './components/Eventos';
import Padre from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
/* import AjaxApis from './components/AjaxApis'; */
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
import HooksPersonalizados from './components/HooksPersonalizados';
import Referencias from './components/Referencias';
import Formularios from './components/Formularios';
/* import AjaxHooks from './components/AjaxHooks'; */

function App() {
let nombre = 'dvdev';
let auth = true;
let estaciones = ['primavera', 'verano', 'otono', 'invierno'];

  return (
    <>
    <div className="App">
      <header className="App-header">
      <section>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{nombre}</h1>
        <p>{auth ? 'usuario logueado' : 'usuario no logueado'}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{2 + 1}</p>
        <ul>
          {estaciones.map((estacion, index) => <li key={index}>{estacion}</li>)}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </section>
      <section>
        <Componente msg='hey-prop' />
        <hr />
        <Propiedades cadena='texto' numero={19} booleano={true} array={[1,2,3]} object={{nombre: 'dvdev', correo: 'correo@correo.com'}} elementoReact=
        {<i>elemento de React</i>} funcion={num => num * num} componenteReact={<Componente msg='componente pasado como prop' />} />
        <hr />
        <Estado />
        <hr />
        <RenderizadoCondicional />
        <hr />
        <RenderizadoElementos />
        <hr />
        <EventosES6 />
        <hr />
        <EventosES7 />
        <hr />
        <MasSobreEventos />
        <hr />
        <Padre />
        <hr />
        <CicloVida />
        <hr />
        {/* <AjaxApis /> */}
        <hr />
        <ContadorHooks titulo='seguidores' />
        <hr />
        <ScrollHooks />
        <hr />
        <RelojHooks />
        <hr/>
       {/*  <AjaxHooks /> */}
       <hr/>
       <HooksPersonalizados />
       <hr/>
       <Referencias />
       <hr/>
       <Formularios />
       <br />
       <br />
       <br />
       <br />
      </section>
      </header>
    </div>
    </>
  );
}

export default App;
