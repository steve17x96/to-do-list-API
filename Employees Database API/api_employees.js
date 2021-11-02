var db_conn = require('./config/db_config');

var Employees = function(employees){
    this.emp_no = employees.emp_no;
    this.birth_date = employees.birth_date;
    this.first_name = employees.first_name;
    this.last_name = employees.last_name;
    this.gender = employees.gender;
    this.hire_date = hire_date;
};


Employees.getEmployees = function (result){
    db_conn.query("SELECT * FROM employees", function(err,res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log("users: ", res);
            result(null, res);
        }
    });
};

module.exports = Employees;