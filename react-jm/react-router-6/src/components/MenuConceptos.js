import { Link, NavLink } from 'react-router-dom';

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Enlaces html (no recomendado)</span>:<a href="/">Home</a>
          <a href="/acerca">Acerca</a>
          <a href="/contacto">Contacto</a>
        </li>
        <li>
          <span>Componente Link </span>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/no-existe">Error 404</Link>
        </li>
        <li>
          <span>Componente NavLink: </span>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
          <NavLink
            to="/acerca"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Acerca
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Contacto
          </NavLink>
        </li>
        <li>
          <span>Parametros</span>
          <Link to="/usuario/dvdev">dvdev</Link>
          <Link to="/usuario/damian">damian</Link>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConceptos;
