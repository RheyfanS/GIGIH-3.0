const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const playlist = [];

app.post('/add-song', (req, res) => {
  const { title, artists, url } = req.body;
  if (!title || !artists || !url) {
    return res.status(400).json({ error: 'Title, artists, and URL are required fields.' });
  }

  const newSong = { title, artists, url };
  playlist.push(newSong);

  res.status(201).json({ message: 'Song added to the playlist successfully.', song: newSong });
});

app.get('/play-song/:title', (req, res) => {
  const { title } = req.params;
  const songToPlay = playlist.find(song => song.title === title);

  if (!songToPlay) {
    return res.status(404).json({ error: 'Song not found in the playlist.' });
  }
  res.status(200).json({ message: 'Now playing:', song: songToPlay });
});

app.get('/get-playlist', (req, res) => {
  res.status(200).json({ playlist });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
