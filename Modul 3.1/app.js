const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Koneksi ke database MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/spotify', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middlewares
app.use(express.json());

// Routes
const songRoutes = require('./routes/songRoutes');
const artistRoutes = require('./routes/artistRoutes');
const popularSongRoutes = require('./routes/popularSongRoutes');

app.use('/songs', songRoutes);
app.use('/artists', artistRoutes);
app.use('/popular-songs', popularSongRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
