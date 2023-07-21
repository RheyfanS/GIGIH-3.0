const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/spotify';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Koneksi MongoDB gagal:'));
db.once('open', () => {
  console.log('Terhubung ke database MongoDB');
});

module.exports = db;

