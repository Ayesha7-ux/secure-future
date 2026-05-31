const express = require('express');
const router = express.Router();
const resourceController = require('../controllers/resourceController');

router.get('/', resourceController.getResources);
router.post('/', resourceController.uploadResource);
router.get('/:id', resourceController.getResourceById);

module.exports = router;
