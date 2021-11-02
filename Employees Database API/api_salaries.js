var db_conn = require('./config/db_config');

var Salaries = function(salaries){
    this.emp_no = salaries.emp_no;
    this.salary = salaries.salary;
    this.from_date = salaries.from_date;
    this.to_date = salaries.to_date;
};


Salaries.getSalaries = function (result){
    db_conn.query("SELECT * FROM salaries", function(err,res){
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

module.exports = Salaries;