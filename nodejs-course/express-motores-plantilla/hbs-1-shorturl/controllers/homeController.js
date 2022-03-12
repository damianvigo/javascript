const Url = require('../models/Url');
const { nanoid } = require('nanoid');

const leerUrls = async (req, res) => {
  try {
    const urls = await Url.find().lean(); //lean() objs de js tradicional
    res.render('home', { urls: urls });
  } catch (error) {
    console.log(error);
    res.send('fallo algo...');
  }
};

const agregarUrl = async (req, res) => {
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

module.exports = {
  leerUrls,
  agregarUrl,
};
