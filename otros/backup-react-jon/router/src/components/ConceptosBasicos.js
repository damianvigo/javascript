import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Basicos</h2>
      <Router>
        <Switch>
          <Route exact path='/'>
            <h3>Home</h3>
            <p>Bienvenidos al tema de Rutas en React</p>
          </Route>
          <Route exact path='/acerca'>
            <h3>Acerca</h3>
          </Route>
          <Route exact path='/contacto'>
            <h3>Contacto</h3>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default ConceptosBasicos;
