import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({
  children,
  isAllowed,
  redirectTo = '/landing',
}) => {
  console.log(isAllowed);
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
};
