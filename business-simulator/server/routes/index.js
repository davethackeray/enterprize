const express = require('express');
const router = express.Router();
const scenarioController = require('../controllers/scenarioController');

router.get('/scenarios', scenarioController.getScenarios);
router.post('/scenarios', scenarioController.createScenario);

module.exports = router;