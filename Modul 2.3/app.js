const express = require('express');
const bodyParser = require('body-parser');
const playlistRoutes = require('./routes/playlistRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/playlist', playlistRoutes);

app.listen(3000, () => {
  console.log('Server berjalan pada port 3000...');
});
