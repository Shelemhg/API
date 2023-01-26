const express = require('express');
const router = express.Router();
//ADDED SWAGGER ROUTES
router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));

module.exports = router;