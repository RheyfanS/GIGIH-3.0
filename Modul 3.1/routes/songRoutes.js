const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');

router.post('/', songController.addSong);
router.get('/', songController.getSongs);
router.get('/', songController.getAllSongs); 
router.get('/search', songController.searchSongByTitle);

module.exports = router;
