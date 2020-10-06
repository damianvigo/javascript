import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';

import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';

function App() {
  return (
    <Router>
      <div className='container mt-5'>
        <div className='btn-group'>
          <Link to='/' className='btn btn-dark'>
            Inicio
          </Link>
          <Link to='/nosotros' className='btn btn-dark'>
            Nosotros
          </Link>
          <NavLink activeClassName='active' to='/contacto' className='btn btn-dark'>
            Contacto
          </NavLink>
        </div>
        <hr />
        <Switch>
          <Route exact path='/'>
            <Inicio />
          </Route>
        </Switch>
        <Switch>
          <Route path='/contacto'>
            <Contacto />
          </Route>
        </Switch>
        <Switch>
          <Route path='/nosotros'>
            <Nosotros />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
