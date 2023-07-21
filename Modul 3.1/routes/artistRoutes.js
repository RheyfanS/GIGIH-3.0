const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artistController');

router.post('/', artistController.addArtist);
router.get('/', artistController.getArtists);

module.exports = router;
