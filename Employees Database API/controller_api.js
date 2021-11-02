const Employees = require('./api_employees');
const Overtime = require('./api_overtime');
const Salaries = require('./api_salaries');

exports.getEmployees = function(req, res) {
    Employees.getEmployees(function(err, employees){
        console.log('controller');
        if(err){
            res.send(err);
        }
        console.log('res', employees);
        res.send(employees);
    });
};

exports.getSalaries = function(req, res) {
    Salaries.getSalaries(function(err, salaries){
        console.log('controller');
        if(err){
            res.send(err);
        }
        console.log('res', salaries);
        res.send(salaries);
    });
};

exports.getOvertime = function(req, res) {
    Overtime.getOvertime(function(err, overtime){
        console.log('controller');
        if(err){
            res.send(err);
        }
        console.log('res', overtime);
        res.send(overtime);
    });
};