const express = require('express');

const router = express.Router();
const controller = require('../controllers/artworkController');
const { protect, admin } = require('../middleware/auth');

router.get('/', controller.getArtworks);
router.get('/:id', controller.getArtwork);
router.post('/', protect, admin, controller.createArtwork);
router.put('/:id', protect, admin, controller.updateArtwork);
router.delete('/:id', protect, admin, controller.deleteArtwork);

module.exports = router;
