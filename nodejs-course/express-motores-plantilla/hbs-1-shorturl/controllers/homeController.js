const Url = require('../models/Url');
const { nanoid } = require('nanoid');

const leerUrls = async (req, res) => {
  try {
    const urls = await Url.find().lean(); //lean() objs de js tradicional
    // console.log(urls);
    res.render('home', { urls: urls });
  } catch (error) {
    console.log(error);
    res.send('fallo algo...');
  }
};

const agregarUrl = async (req, res) => {
  console.log(req.body);
  const { origin } = req.body;

  try {
    const url = new Url({ origin: origin, shortURL: nanoid(8) });
    await url.save();
    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.send('error algo fallo');
  }
};

const eliminarUrl = async (req, res) => {
  const { id } = req.params;
  try {
    await Url.findByIdAndDelete(id);
    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.send('error algo fallo');
  }
};

const editarUrlForm = async (req, res) => {
  const { id } = req.params;
  try {
    const url = await Url.findById(id).lean();
    // console.log(url);
    res.render('home', { url });
  } catch (error) {
    console.log(error);
    res.send('error algo fallo');
  }
};

const editarUrl = async (req, res) => {
  const { id } = req.params;
  const { origin } = req.body;
  try {
    await Url.findByIdAndUpdate(id, { origin: origin });
    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.send('error algo fallo');
  }
};

const redireccionamiento = async (req, res) => {
  const { shortURL } = req.params;
  console.log(shortURL);
  try {
    const urlDB = await Url.findOne({ shortURL: shortURL });
    // console.log(urlDB);
    res.redirect(urlDB.origin);
  } catch (error) {}
};

module.exports = {
  leerUrls,
  agregarUrl,
  eliminarUrl,
  editarUrlForm,
  editarUrl,
  redireccionamiento,
};