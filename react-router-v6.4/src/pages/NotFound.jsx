import { Link, useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Error: {error.status}</h1>
      <p>Page not found 😓</p>
      <p>{error.statusText || error.message}</p>
      <Link to="/">Volver al home</Link>
    </div>
  );
};

export default NotFound;
