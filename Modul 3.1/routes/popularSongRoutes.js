const express = require('express');
const router = express.Router();
const popularSongController = require('../controllers/popularSongController');

router.post('/', popularSongController.addPopularSong);
router.get('/', popularSongController.getPopularSongs);

module.exports = router;
