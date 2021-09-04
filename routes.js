const express = require('express');
const User = require('./api');
const List = require('./api_list');
const router = express.Router()

const apiController = require('./controller_api');


router.get('/users', apiController.findAll);
router.post('/users', apiController.create);
router.get('/users/:id', apiController.findById);
router.put('/users/:id', apiController.update);
router.delete('/users/:id', apiController.delete);

router.get('/list', apiController.getAll);
router.post('/list', apiController.create_list);
router.get('/list/:id', apiController.findById_list);
router.put('/list/:id', apiController.updateByID);
router.delete('/list/:id', apiController.delete_list);

module.exports = router