const Artist = require('../models/artistModel');

const addArtist = async (req, res) => {
  try {
    const newArtist = await Artist.create(req.body);
    res.status(201).json(newArtist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getArtists = async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addArtist,
  getArtists,
};
