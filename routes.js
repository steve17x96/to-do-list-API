const express = require('express');
const User = require('./api');
const router = express.Router()

const apiController = require('./controller_api');


router.get('/', apiController.findAll);
router.post('/', apiController.create);
router.get('/:id', apiController.findById);
router.put('/:id', apiController.update);
router.delete('/:id', apiController.delete);

module.exports = router