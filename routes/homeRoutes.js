const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Home routes
router.get('/', homeController.getWelcomeMessage);
router.get('/health', homeController.getHealthCheck);

module.exports = router; 