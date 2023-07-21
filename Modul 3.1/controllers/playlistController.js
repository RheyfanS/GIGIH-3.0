const playlistModel = require('../models/playlistModel');

function addSong(req, res) {
  const { title, artists, album } = req.body;
  if (!title || !album || !Array.isArray(artists)) {
    return res.status(400).json({ error: 'Format permintaan tidak sesuai' });
  }
  try {
    playlistModel.addSong(title, artists, album);
    res.json({ message: 'Lagu berhasil ditambahkan ke playlist.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal menambahkan lagu ke playlist.' });
  }
}

function increasePlayCount(req, res) {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Format permintaan tidak sesuai' });
  }
  try {
    playlistModel.increasePlayCount(title);
    res.json({ message: 'Pemutaran lagu berhasil ditambahkan.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal menambahkan pemutaran lagu.' });
  }
}

function getPlaylist(req, res) {
  try {
    const playlist = playlistModel.getPlaylist();
    res.json(playlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal mendapatkan daftar lagu.' });
  }
}

function getSortedPlaylist(req, res) {
  try {
    const sortedPlaylist = playlistModel.getSortedPlaylist();
    res.json(sortedPlaylist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal mendapatkan daftar lagu yang diurutkan.' });
  }
}

module.exports = {
  addSong,
  increasePlayCount,
  getPlaylist,
  getSortedPlaylist
};
