const playlistModel = require('../models/playlistModel');

function addSong(req, res) {
  const { title, artists, url } = req.body;
  playlistModel.addSong(title, artists, url);
  res.json({ message: 'Lagu berhasil ditambahkan ke playlist.' });
}

function increasePlayCount(req, res) {
  const { title } = req.body;
  playlistModel.increasePlayCount(title);
  res.json({ message: 'lagu berhasil diputar.' });
}

function getPlaylist(req, res) {
  const playlist = playlistModel.getPlaylist();
  res.json(playlist);
}

function getSortedPlaylist(req, res) {
  const sortedPlaylist = playlistModel.getSortedPlaylist();
  res.json(sortedPlaylist);
}

module.exports = {
  addSong,
  increasePlayCount,
  getPlaylist,
  getSortedPlaylist
};
