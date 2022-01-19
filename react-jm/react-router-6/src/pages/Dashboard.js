import { useNavigate, Outlet, Link, Navigate } from 'react-router-dom';
/* Navigate es el componente Redirect v5 */
const Dashboard = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  let auth;
  auth = null;
  auth = true;
  return (
    <div>
      <h3>Dashboard</h3>

      {/* remplaza componentes hijo */}
      {auth ? <Outlet /> : <Navigate to="/" />}

      <button onClick={handleClick}>Logout</button>

      <Link to="login">Login</Link>
    </div>
  );
};

export default Dashboard;
