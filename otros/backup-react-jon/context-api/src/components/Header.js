const Header = ({ theme, handleTheme }) => {
  return (
    <header className={theme}>
      <h2>app sin context api</h2>
      <h3>header</h3>
      <select name="language">
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input
        type="radio"
        name="theme"
        id="light"
        onClick={handleTheme}
        value="light"
      />
      <label htmlFor="light">Claro</label>
      <input
        type="radio"
        name="theme"
        id="dark"
        onClick={handleTheme}
        value="dark"
      />
      <label htmlFor="dark">Oscuro</label>
      <button>Iniciar Sesion</button>
    </header>
  );
};

export default Header;
