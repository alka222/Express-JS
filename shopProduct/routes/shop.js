const express = require('express');

// const path = require('path');
// const rootDir = require('../util/path');

const router = express.Router();

const shopController = require('../controllers/shopController');

router.get('/product', shopController.getProducts);

module.exports = router;