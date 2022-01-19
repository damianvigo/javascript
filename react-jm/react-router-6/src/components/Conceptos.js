import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  HashRouter,
  Link,
} from 'react-router-dom';
import Acerca from '../pages/Acerca';
import Contacto from '../pages/Contacto';
import Dashboard from '../pages/Dashboard';
import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Productos from '../pages/Productos';
import ReactTopics from '../pages/ReactTopics';
import Usuario from '../pages/Usuario';
import MenuConceptos from './MenuConceptos';
import PrivateRoute from './PrivateRoute';

const Conceptos = () => {
  return (
    <div>
      <h2>Hash Router</h2>
      <HashRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
      <hr />
      <h2>Conceptos</h2>
      <Router>
        <MenuConceptos />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/usuario/:username" element={<Usuario />} />
          <Route path="/productos" element={<Productos />} />
          {/* Navigate es el redirect */}
          <Route path="/about" element={<Navigate to="/acerca" />} />
          <Route path="/contact" element={<Navigate to="/contacto" />} />
          <Route path="/react/*" element={<ReactTopics />} />
          <Route path="login" element={<Login />} />
          {/* <PrivateRoute exact path='dashboard' component={Dashboard} /> */}
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
};

/* const Conceptos = () => {
  return (
    <div>
      <h2>Conceptos Basicos</h2>
      <Router>
        <Routes>
          <Route path="/" element={<h3>Home</h3>} />
          <Route path="/acerca" element={<Acerca />} />
          <Route
            path="/contacto"
            element={
              <>
                <Contacto />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora, reprehenderit perspiciatis! Impedit dolorem deserunt
                  velit soluta excepturi voluptatum consectetur similique,
                  maiores et exercitationem quas alias cum mollitia commodi,
                  eius laborum?
                </p>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}; */

export default Conceptos;
