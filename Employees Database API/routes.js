const express = require('express');
const Employees = require('./api_employees');
const Salaries = require('./api_salaries');
const Overtime = require('./api_overtime');
const router = express.Router()

const apiController = require('./controller_api');


router.get('/employees', apiController.getEmployees);
router.get('/salaries', apiController.getSalaries);
router.get('/overtime', apiController.getOvertime);


module.exports = router;