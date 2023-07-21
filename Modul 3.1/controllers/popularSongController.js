const PopularSong = require('../models/popularSongModel');

const addPopularSong = async (req, res) => {
  try {
    const newPopularSong = await PopularSong.create(req.body);
    res.status(201).json(newPopularSong);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPopularSongs = async (req, res) => {
  try {
    const popularSongs = await PopularSong.find();
    res.json(popularSongs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addPopularSong,
  getPopularSongs,
};
