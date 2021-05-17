import { Redirect, Route } from 'react-router';
/* 
const PrivateRoute = (props) => {
  return <Route exact={props.exact} path={props.path} component={props.component} />;
}; */

/* const PrivateRoute = (props) => {
  return <Route {...props} />;
}; */

// Simlando la autentificacion
let auth;
auth = true;
auth = null;

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest}>
    {auth ? <Component /> : <Redirect to='/login' />}
  </Route>
};

export default PrivateRoute;
