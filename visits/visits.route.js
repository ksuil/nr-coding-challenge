const express = require('express');
const router = express.Router();

const visitsController = require('./visits.controller');

const urls = {};

/* GET users listing. */
router.get('/', visitsController.getVisits);

router.post('/', visitsController.postVisits);

module.exports = router;
