const User = require('../models/User');
const { nanoid } = require('nanoid');

const registerForm = (req, res) => {
  res.render('register');
};

const registerUser = async (req, res) => {
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

    res.redirect('/auth/login');
    // console.log(user);
    //  res.json(user);
  } catch (error) {
    res.json({ error: error.message });
  }

  // res.json(req.body);
};

const confirmarCuenta = async (req, res) => {
  const { token } = req.params;

  try {
    const user = await User.findOne({ tokenConfirm: token });
    // console.log(user);
    if (!user) throw new Error('No existe este usuario');
    console.log(user);

    user.cuentaConfirmada = true;
    user.tokenConfirm = null;

    await user.save();

    res.redirect('/auth/login');
  } catch (error) {
    res.json({ error: error.message });
  }
};

const loginForm = (req, res) => {
  res.render('login');
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error('No existe ese email');

    if (!user.cuentaConfirmada) throw new Error('Falta confirmar cuenta');

    if (!(await user.comparePassword(password)))
      throw new Error('Password incorrecto');

    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};

module.exports = {
  loginForm,
  registerForm,
  registerUser,
  confirmarCuenta,
  loginUser,
};
