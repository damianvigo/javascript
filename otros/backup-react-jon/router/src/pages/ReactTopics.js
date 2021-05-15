import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';

const Topic = () => {
  let { topic } = useParams();
  return (
    <div>
      <h4>{topic}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
      </p>
    </div>
  );
};

const ReactTopics = () => {
  // let match = useRouteMatch();
  // console.log(match);
  // 'path' permite construir rutas relativas <Route>, mientras que 'url' permite construir enlaces relativos <Link> o <NavLink>
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Temas de React</h2>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${url}/estado`}>Estado</Link>
        </li>
        <li>
          <Link to={`${url}/componentes`}>Componente</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h4>Elige un tema React</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit est sunt nulla sit nesciunt incidunt dolorem optio!
            Neque enim nesciunt perspiciatis, quaerat eum accusamus et minima doloribus. Perspiciatis, omnis.
          </p>
        </Route>
        <Route path={`${path}/:topic`} component={Topic} />
      </Switch>
    </div>
  );
};

export default ReactTopics;
