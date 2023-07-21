const Song = require('../models/songModel');

const addSong = async (req, res) => {
  try {
    const newSong = await Song.create(req.body);
    res.status(201).json(newSong);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Controller untuk mendapatkan semua lagu
const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller untuk mencari lagu berdasarkan judul (title)
const searchSongByTitle = async (req, res) => {
  try {
    const { title } = req.query;
    if (!title) {
      return res.status(400).json({ message: 'Title parameter is required' });
    }

    const songs = await Song.find({ title: { $regex: title, $options: 'i' } });
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addSong,
  getSongs,
  getAllSongs, // Tambahkan fungsi baru ini
  searchSongByTitle, // Tambahkan fungsi baru ini
};
