import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Acerca from '../pages/Acerca';
import Contacto from '../pages/Contacto';
import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import Usuario from '../pages/Usuario';
import MenuConceptos from './MenuConceptos';

const Conceptos = () => {
  return (
    <div>
      <h2>Conceptos</h2>
      <Router>
        <MenuConceptos />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/usuario/:username" element={<Usuario />} />
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
