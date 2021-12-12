import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotfFoundPage';
import UserPage from './pages/UserPage';
import UsersPage from './pages/UsersPage';

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* atributo element nuevo, solo el nombre del componente NO, ahora el componente en forma de etiqueta */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/usuarios" element={<Navigate to="/users" />} />

        {/* No es necesario el exact */}
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/users/new" element={<p>New User</p>} />

        {/* cambio redirect con navigate */}
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="welcome" element={<p>Welcome!!!</p>} />
          <Route path="goodbye" element={<p>Goodbye!!!</p>} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
