const express = require('express');

// const path = require('path');
// const rootDir = require('../util/path');

const router = express.Router();

const successController = require('../controllers/successController');

router.get('/success', successController.getSuccess);

router.post('/success', successController.postSuccess);

module.exports = router;