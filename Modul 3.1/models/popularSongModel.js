const mongoose = require('mongoose');

const popularSongSchema = new mongoose.Schema({
  title: String,
  playCount: Number,
  period: String,
});

const PopularSong = mongoose.model('PopularSong', popularSongSchema);

module.exports = PopularSong;
