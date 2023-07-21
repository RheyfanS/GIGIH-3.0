const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlistController');

router.post('/add', playlistController.addSong);
router.post('/play', playlistController.increasePlayCount);
router.get('/', playlistController.getPlaylist);
router.get('/sort', playlistController.getSortedPlaylist);

module.exports = router;