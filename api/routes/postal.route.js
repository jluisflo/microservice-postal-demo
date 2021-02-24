const express = require('express');
const router = express.Router();
const controller = require('../controller/postal.controller');

router.get('/distance/:zipcode1/:zipcode2', controller.getDistance);

module.exports = router;