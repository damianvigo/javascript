import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const initialTheme = 'light';
const initialLanguage = 'es';
const initialAuth = null;

const translations = {
  es: {
    headerTitle: 'Mi aplicacion SIN Context Api',
    headerSubtitle: 'Mi Cabecera',
    headerLight: 'Claro',
    headerDark: 'Oscuro',
    buttonLogin: 'Iniciar Sesion',
    buttonLogout: 'Cerrar Sesion',
    mainWelcome: 'Bienvenido Invitado',
    mainHello: 'Hola usuario',
    mainContent: 'Mi contenido principal',
    footerTitle: 'Mi pie de pagina',
  },
  en: {
    headerTitle: 'My application WITHOUT Context Api',
    headerSubtitle: 'My Header',
    headerLight: 'Sure',
    headerDark: 'Dark',
    buttonLogin: 'Login',
    buttonLogout: 'Close Session',
    mainWelcome: 'Welcome',
    mainHello: 'Hello user',
    mainContent: 'My main content',
    footerTitle: 'My footer',
  },
};

const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [text, setText] = useState(translations[language]);
  const [auth, setAuth] = useState(initialAuth);

  const handleTheme = (e) => {
    if (e.target.value === 'light') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  const handleLanguage = (e) => {
    if (e.target.value === 'es') {
      setLanguage('es');
      setText(translations.es);
    } else {
      setLanguage('en');
      setText(translations.en);
    }
  };

  const handleAuth = (e) => {
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    }
  };

  return (
    <div className="my-page">
      <Header
        theme={theme}
        handleTheme={handleTheme}
        texts={text}
        handleLanguage={handleLanguage}
        auth={auth}
        handleAuth={handleAuth}
      />
      <Main theme={theme} texts={text} auth={auth} />
      <Footer theme={theme} texts={text} />
    </div>
  );
};

export default MyPage;
