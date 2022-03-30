const User = require('../models/User');
const { validationResult } = require('express-validator');
const { nanoid } = require('nanoid');

const registerForm = (req, res) => {
  res.render(
    'register' /* {
     each view mensajes: req.flash('mensajes'),
     each view - csrfToken: req.csrfToken(),
  } */
  );
};

const loginForm = (req, res) => {
  res.render(
    'login' /* {
     each view mensajes: req.flash('mensajes'),
     each view - csrfToken: req.csrfToken(),
  } */
  );
};

const registerUser = async (req, res) => {
  const errors = validationResult(req);
  console.log(errors.isEmpty());
  if (!errors.isEmpty()) {
    // return res.json(errors);
    req.flash('mensajes', errors.array());
    return res.redirect('/auth/register');
  }

  console.log(req.body);
  const { userName, email, password } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (user) throw new Error('ya existe el usuario');

    user = new User({
      userName: userName,
      email: email,
      password: password,
      tokenConfirm: nanoid(),
    });
    await user.save();

    // enviar correo electronico de confirmacion
    req.flash('mensajes', [
      { msg: 'Revisa tu correo electronico y valida tu cuenta' },
    ]);
    res.redirect('/auth/login');
    // console.log(user);
    //  res.json(user);
  } catch (error) {
    // res.json({ error: error.message });
    req.flash('mensajes', [{ msg: error.message }]);
    return res.redirect('/auth/register');
  }

  // res.json(req.body);
};

const confirmarCuenta = async (req, res) => {
  const { token } = req.params;
  console.log(token);

  try {
    const user = await User.findOne({ tokenConfirm: token });
    // console.log(user);
    if (!user) throw new Error('No existe este usuario');
    console.log(user);

    user.cuentaConfirmada = true;
    user.tokenConfirm = null;

    await user.save();

    req.flash('mensajes', [
      { msg: 'Cuenta verificada, puedes iniciar sesion' },
    ]);
    res.redirect('/auth/login');
  } catch (error) {
    req.flash('mensajes', [{ msg: error.message }]);
    return res.redirect('/auth/login');
    // res.json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    req.flash('mensajes', errors.array());
    return res.redirect('/auth/login');
  }

  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error('No existe ese email');

    if (!user.cuentaConfirmada) throw new Error('Falta confirmar cuenta');

    if (!(await user.comparePassword(password)))
      throw new Error('Password incorrecto');

    // creando session con passport
    req.login(user, function (err) {
      if (err) throw new Error('Error al crear la sesion');
      return res.redirect('/');
    });
  } catch (error) {
    console.log(error);
    req.flash('mensajes', [{ msg: error.message }]);
    return res.redirect('/auth/login');
    // res.send(error.message);
  }
};

const cerrarSesion = (req, res) => {
  req.logout();
  return res.redirect('/auth/login');
};

module.exports = {
  loginForm,
  registerForm,
  registerUser,
  confirmarCuenta,
  loginUser,
  cerrarSesion,
};
