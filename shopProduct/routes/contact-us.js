const express = require('express');

// const path = require('path');
// const rootDir = require('../util/path');

const router = express.Router();

const contactController = require('../controllers/contactController');

router.get('/contactus', contactController.getContactUs);

router.post('/contactus', contactController.postContactUs);

module.exports = router;