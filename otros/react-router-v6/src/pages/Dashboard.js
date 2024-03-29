// Antes useHistory ahora useNavigate
import { useNavigate, Link, Outlet } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
      <Outlet />

      <h1>Dashboard</h1>

      <button onClick={handleClick}>Logout</button>

      <br />

      <Link to="welcome">say welcome</Link>

      <br />

      <Link to="goodbye">say goodbye</Link>
    </div>
  );
}
