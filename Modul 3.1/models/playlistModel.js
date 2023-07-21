// models/playlistModel.js

const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artists: { type: [String], required: true },
  album: { type: String, required: true },
});

const artistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dateOfBirth: { type: Date },
  genres: { type: [String] },
});

const popularSongSchema = new mongoose.Schema({
  title: { type: String, required: true },
  playCount: { type: Number, default: 0 },
  period: { type: String },
});

const Song = mongoose.model('Song', songSchema);
const Artist = mongoose.model('Artist', artistSchema);
const PopularSong = mongoose.model('PopularSong', popularSongSchema);

function addSong(title, artists, album) {
  const song = new Song({ title, artists, album });
  song.save();
}

function increasePlayCount(title) {
  PopularSong.findOneAndUpdate(
    { title },
    { $inc: { playCount: 1 } },
    { upsert: true },
    (err, doc) => {
      if (err) {
        console.error(err);
      }
    }
  );
}

function getPlaylist(callback) {
  Song.find({}, callback);
}

function getSortedPlaylist(callback) {
  PopularSong.find({}, null, { sort: { playCount: -1 } }, callback);
}

module.exports = {
  addSong,
  increasePlayCount,
  getPlaylist,
  getSortedPlaylist,
};
